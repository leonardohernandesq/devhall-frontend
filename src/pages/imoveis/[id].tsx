import { useState, ChangeEvent } from 'react'
import * as S from './style'
import { AuthHeader } from '../../components/AuthHeader'
import { Banner } from '../../components/Banner'
import { Input, Textarea } from '../../components/Input';
import { FiDownload } from 'react-icons/fi'

import { canSSRAuth } from '../../utils/canSSRAuth';
import { setupAPIClient } from '../../services/api';
import { Button } from '../../components/Button';
import router from 'next/router';
import { toast } from 'react-toastify';

interface IHouseData{
    id: string,
    title: string,
    price: string,
    area: string,
    bedroom: string,
    type: string,
    status: string,
    thumbnail: string
    description: string,
    address: string,
    broker_id: string,
}

interface IBrokerData{
    id: string,
    name: string,
}

interface IRequestProps{
    houses: IHouseData,
    brokers: IBrokerData[],
}

export default function EditImoveis({houses, brokers}:IRequestProps){
    const [title, setTitle] = useState(houses?.title)
    const [price, setPrice] = useState(houses?.price)
    const [area, setArea] = useState(houses?.area)
    const [bedroom, setBedroom] = useState(houses?.bedroom)
    const [type, setType] = useState(houses?.type)
    const [status, setStatus] = useState(houses?.status)
    const [description, setDescription] = useState(houses?.description)
    const [address, setAddress] = useState(houses?.address)
    const [brokerSelected, setBrokerSelected] = useState(houses?.broker_id)

    const [avatarUrl, setAvatarUrl] = useState(`http://localhost:3333/files/${houses?.thumbnail}`);
    const [photo, setPhoto] = useState(null);

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }
    
        const image = e.target.files[0];
    
        if (!image) {
            return;
        }
    
        if (image.type === "image/jpeg" || image.type === "image/png") {
            setPhoto(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        }
    }

    async function handleRegister(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        const apiClient = setupAPIClient();

        try{
            const data = new FormData();

            if(title === '' || area === '' || bedroom === '' || type === '' || status === '' || description === '' || address === '' || brokerSelected === ''){
                toast.error('Preencha todos os dados.')
                return;
            }

            data.append('id', houses.id)
            data.append('title', title)
            data.append('price', price)
            data.append('area', area)
            data.append('bedroom', bedroom)
            data.append('type', type)
            data.append('status', status)
            data.append('file', photo)
            data.append('description', description)
            data.append('address', address)
            data.append('broker_id', brokerSelected)

            await apiClient.put('/edit/house', data)
            toast.success('Imóvel editado com sucesso.')
            router.push('/dashboard')
        }catch(err){
            toast.error('Erro ao cadastrar o Imóvel, tente novamente.' + err)
        }

    }

    return(
        <S.Container>
            <AuthHeader />
            <Banner title='Editar Imóvel' thumbnail='banner-cadastro.jpg' />
                <S.Wrapper>
                    <form onSubmit={handleRegister}>
                        <S.LabelThumbnail>
                            <FiDownload size={42} color={"var(--secondary)"}/>
                            Imagem Principal
                            <input type="file" onChange={handleFile} name="file" accept="image/png, image/jpeg"/>

                            {avatarUrl && (
                                <picture className='preview'>
                                    <img
                                        src={`http://localhost:3333/files/${houses?.thumbnail}`}
                                        alt="Imagem do imóvel "
                                        width={250}
                                        height={250}
                                        className='preview'
                                    />
                                </picture>
                            )}
                        </S.LabelThumbnail>

                        <div className='column-3'>
                            <Input type="text" label='Título da Casa' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                            <Input type="text" label='Preço' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                            <Input type="text" label='Área | m²' value={area} onChange={(e) => setArea(e.target.value)} required/>
                        </div>
                        <div className='column-3'>
                            <Input type="text" label='Número de quartos' value={bedroom} onChange={(e) => setBedroom(e.target.value)} required/>
                            <Input type="text" label='Tipo de imóvel' value={type} onChange={(e) => setType(e.target.value)} required/>
                            <Input type="text" label='Status' value={status} onChange={(e) => setStatus(e.target.value)} required/>
                        </div>
                        <div className='column-2'>
                            <select value={brokerSelected} onChange={(e) => setBrokerSelected(e.target.value)} required>
                                <option value="" disabled selected>Corretores Responsáveis</option>
                                {
                                    brokers.map((item, index) => {
                                        return(
                                            <option key={item?.id} value={item?.id}>
                                                {item?.name}
                                            </option>
                                        );
                                    })
                                }
                            </select>

                            <Input type="text" label='Endereço do imóvel' value={address} onChange={(e) => setAddress(e.target.value)} required/>
                        </div>


                        <Textarea label='Descrição do imóvel' value={description} onChange={(e) => setDescription(e.target.value)} required/>

                        <Button bg='var(--primary)' color='var(--light-900)'>Editar Imóvel</Button>
                    </form>
                </S.Wrapper>
            </S.Container>
    );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const { id } = ctx.params;
    try{
        const apiClient = setupAPIClient(ctx); 

        const response = await apiClient.get('/detail/house', {
            params:{
                id: id,
            }
        });

        console.log(response.data)
        const responseBroker = await apiClient.get('/broker');

        
        return{
            props:{
                houses: response.data,
                brokers: responseBroker.data,
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