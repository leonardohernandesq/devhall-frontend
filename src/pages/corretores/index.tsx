import { useState, FormEvent } from 'react';

import * as S from './style';
import { AuthHeader } from '../../components/AuthHeader';
import { Banner } from '../../components/Banner';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { setupAPIClient } from '../../services/api';
import { canSSRAuth } from '../../utils/canSSRAuth';
import router from 'next/router';

export default function Corretores(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [status, setStatus] = useState('true')
    const [telefone, setTelefone] = useState('')
    
    const apiClient = setupAPIClient()

    async function handleRegisterBroker(e: FormEvent){
        e.preventDefault();

            const response = await apiClient.post('/new/broker', {
                name: nome,
                email: email,
                whatsapp: whatsapp,
                status: status === 'true' ? true : false,
                phone: telefone,
            }).then((response) => {
                setNome('')
                setEmail('')
                setWhatsapp('')
                setStatus('true')
                setTelefone('')

                alert('Cadastrado');
                router.push('/dashboard')
            }).catch((err) => {
                console.log(err)
            })

        } 

    return(
        <S.Container>
            <AuthHeader />
            <Banner title='Cadastrar Corretores' thumbnail='banner-cadastro.jpg'/>
                <S.Wrapper>
                    <form onSubmit={handleRegisterBroker}>
                        <div>
                            <div className='column-2'>
                                <Input type="string" label='Nome do Corretor' value={nome} onChange={(e) => setNome(e.target.value)} required/>
                                <Input type="string" label='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>

                            <div className='column-3'>
                                <Input type="string" label='Whatsapp' value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required/>
                                <div className='select-div'>
                                    <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <optgroup label="Selecione o Status do Corretor">
                                            <option value={'true'}>True</option>
                                            <option value={'false'}>False</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <Input type="string" label='Telefone Fixo' value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
                            </div>
                        </div>

                        <Button bg='var(--primary)' color="var(--light-900)">
                            Cadastrar
                        </Button>
                    </form>


                </S.Wrapper>
            </S.Container>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{
        props: {

        }
    }
})

