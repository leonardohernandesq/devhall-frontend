import { useState, FormEvent } from 'react';

import * as S from './style';
import { AuthHeader } from '../../components/AuthHeader';
import { Banner } from '../../components/Banner';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { setupAPIClient } from '../../services/api';
import { canSSRAuth } from '../../utils/canSSRAuth';

import router from 'next/router';
import { toast } from 'react-toastify';

interface IDataBroker{
    id: string,
	name: string,
	email: string,
	whatsapp: string,
	status: string,
	phone: string | null,
}

interface IPropsBroker{
    broker: IDataBroker
}

export default function EditBrokers({broker}: IPropsBroker){
    const [nome, setNome] = useState(broker?.name)
    const [email, setEmail] = useState(broker?.email)
    const [whatsapp, setWhatsapp] = useState(broker?.whatsapp)
    const [status, setStatus] = useState(broker?.status)
    const [telefone, setTelefone] = useState(broker?.phone)
    const apiClient = setupAPIClient()

    async function handleEditBroker(e: FormEvent){
        e.preventDefault();

            const response = await apiClient.put('edit/broker', {
                id: broker.id,
                name: nome,
                email: email,
                whatsapp: whatsapp,
                status: status == 'true' ? true : false,
                phone: telefone,
            }).then((response) => {
                setNome('')
                setEmail('')
                setWhatsapp('')
                setStatus('true')
                setTelefone('')
                toast.success('Corretor editado com sucesso.')
                router.push('/dashboard')
            }).catch((err) => {
                toast.error('Erro ao editar o corretor, tente novamente')
            })

        } 

    return(
        <S.Container>
            <AuthHeader />
            <Banner title='Editando Corretor' thumbnail='banner-cadastro.jpg'/>
                <S.Wrapper>
                    <form onSubmit={handleEditBroker}>
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
                                <Input type="string" label='Telefone Fixo' value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                            </div>
                        </div>

                        <Button bg='var(--primary)' color="var(--light-900)">
                            Editar
                        </Button>
                    </form>


                </S.Wrapper>
            </S.Container>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const { id } = ctx.params
    try{
        const apiClient = setupAPIClient(ctx);

        const response = await apiClient.get('/detail/broker', {
            params:{
                id: id,
            }
        })

        return{
            props: {
                broker: response.data 
            }
        }

    }catch(err){
        console.log(err)
        return{
            redirect:{
                destination: '/dashboard',
                permanent: false,
            }
        }
    }


})
