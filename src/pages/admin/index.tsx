import { FormEvent, useContext, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Banner from '../../../public/images/banner-sign.jpg'
import Logo from '../../../public/images/logo-black-red.svg'

import * as S from './style'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { AuthContext } from '../../contexts/AuthContext'
import { canSSRGuest } from '../../utils/canSSRGuest'
import { toast } from 'react-toastify';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const {signIn} = useContext(AuthContext);

    async function handleLogin(e: FormEvent){
    e.preventDefault();

    if(email === '' || password === ''){
        toast.warn('Preencha todos os dados')
        return;
    };

    let data = {
        email,
        password,
    };

    await signIn(data);
    }

    return (
    <>
        <Head>
        <title>DevHall - Luxury Real State</title>
        </Head>

        <S.Container>
            <S.DivImage>
                <Image src={Banner} alt="Banner Casa de Luxo" />
            </S.DivImage>

            <S.DivContent>
                <Image src={Logo} alt="Logo da empresa sendo um DH preto com um telhado vermelho formando uma casinha e a escrita preta Dev Hall no lado esquerdo" height={140}/>

                <form onSubmit={handleLogin}>
                <Input
                    label='Digite seu email:'
                    type="string"
                    onChange={(e) => setEmail(e.target.value)}  
                    required
                />
                <Input
                    label='Digite sua senha:'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button bg='var(--primary)' color='var(--light-900)'>
                    Acessar
                </Button>
                </form>
            </S.DivContent>
        </S.Container>
    </>
    )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
    return{
        props:{
            
        }
    }
})