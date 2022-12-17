import { GetServerSidePropsContext } from "next";
import { ClientHeader } from "../../components/ClientHeader";
import { setupAPIClient } from "../../services/api";
import { FiMapPin, FiHome, FiMinimize2} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { BiPhoneCall, BiMailSend } from 'react-icons/bi';
import { Footer } from "../../components/Footer";

import Link from "next/link";
import * as S from './style'

interface IDataBroker{
    id: string,
    name: string,
    email: string,
    whatsapp: string,
    status: boolean,
    phone: string | null,
}

interface IDataHouse{
    id: string,
    title: string,
    price: number,
    area: string,
    bedroom: string,
    type: string,
    status: string,
    thumbnail: string,
    galeryphoto: [],
    description: string,
    address: string,
    broker_id: string,
    broker: IDataBroker
}

interface IPropsHouse{
    house: IDataHouse
}

export default function Imovel({house}: IPropsHouse){
    return(
        <S.Container>
            <ClientHeader />
            <S.Banner bg={house.thumbnail}>
                <section className="brightness-image">
                    <h1>{house.title}</h1>
                    <div>
                        <span>
                            {house.status} 
                        </span>
                        <span> | </span>
                        <span>
                            {house.type}
                        </span>
                    </div>
                    
                    <div className="buttonPrice">
                        <strong>{house.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    </div>
                </section>
            </S.Banner>
            <S.Wrapper>
                <h2>Descrição do imóvel</h2>
                <p>{house.description}</p>

                <S.Details>
                    <div>
                        <FiHome size={30} />
                        <p>{Number(house.bedroom) === 1 || 0 ? `${house.bedroom} Quarto` : `${house.bedroom} Quartos`} </p>
                    </div>
                    <div>
                        <FiMapPin size={30}/>
                        <p>{house.address.split(" - ", 1)}</p>
                    </div>
                    <div>
                        <FiMinimize2 size={30}/>
                        <p>{house.area}m²</p>
                    </div>
                </S.Details>

                <S.Broker>
                    <p><strong>Corretor Responsável:</strong> {house.broker.name}</p>
                    <section>


                        <ul>
                            <li>
                                <Link href={`https://api.whatsapp.com/send/?phone=${house.broker.whatsapp}`} target={'_blank'}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><FaWhatsapp size={30}/></span>
                                </Link>
                            </li>
                            {house.broker.phone !== null ? 
                                <li>
                                    <Link href={`tel:${house.broker.phone}`} target={'_blank'}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><BiPhoneCall size={30}/></span>
                                    </Link>
                                </li>
                            : 
                                <></>
                            } 
                            <li>
                                <Link href={`mailto:${house.broker.email}`} target={'_blank'}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><BiMailSend size={30}/></span>
                                </Link>
                            </li>
                        </ul>
                    </section>

                </S.Broker>
            </S.Wrapper>
            <Footer />
        </S.Container>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext){
    const { id } = ctx.params;
    try{
        const apiClient = setupAPIClient(ctx);
    
        const response = await apiClient.get('/detail/house',{
            params:{
                id,
            }
        })

        return{
            props:{
                house: response.data
            }
        }
    } catch(err){
        return{
            redirect:{
                destination: '/dashboard',
                permanent: false,
            }
        }
    }

}