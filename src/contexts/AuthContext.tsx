import { createContext, ReactNode, useState, useEffect } from 'react';
import {destroyCookie, setCookie, parseCookies} from 'nookies';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify'

import Router from 'next/router'
import { setupAPIClient } from '../services/api';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id:string;
    email:string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode
}

export function signOut(){
    try{
        destroyCookie(undefined, '@devhall.token');
        toast.success('Deslogando...')
        Router.push('/admin');
    } catch(err){
        toast.error('Erro ao deslogar, tente novamente.')
    }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    const apiClient = setupAPIClient()

    useEffect(() => {
        const {'@devhall.token': token} = parseCookies();

        if(token){

            const decoded = jwt_decode(token) as string;
            const { sub: id} = decoded;

            apiClient.get('/me', {
                params:{
                    id: id
                }
            }).then((response) => {
                const {id, email} = response.data

                setUser({
                    id,
                    email
                })
            })
            .catch((err) => {
                signOut();
            })
        }


    }, [])

    async function signIn({email, password}: SignInProps){
        try{
            const response = await apiClient.post('/session', {
                email,
                password
            })

            const { id, token} = response.data

            setCookie(undefined, '@devhall.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setUser({
                id,
                email
            })

            apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;

            Router.push('/dashboard')

        }catch(err){
            toast.success('Preencha os dados corretamente.')
        }
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}