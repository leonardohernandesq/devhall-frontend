import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult  } from "next";
import { parseCookies, destroyCookie } from 'nookies'
import { AuthTokenError } from "../services/Errors/AuthTokenError";

export function canSSRAuth<P>(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['@devhall.token']

        if(!token){
            return{
                redirect:{
                    destination: '/admin',
                    permanent: false,
                }
            }
        }
        

        try{
            return await fn(ctx)
        } catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx, '@devhall.token');
            
                return{
                    redirect:{
                        destination:'/admin',
                        permanent: false,
                    }
                }
            }

        }
    }
}