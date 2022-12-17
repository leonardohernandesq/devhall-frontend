import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './Errors/AuthTokenError';

export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://devhal-backend-production.up.railway.app/',
        headers:{
            Authorization : `Bearer ${cookies['@devhall.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response.status === 401){
            if(typeof window !== undefined){
                signOut();
            } else{
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error)
    })
    return api
}