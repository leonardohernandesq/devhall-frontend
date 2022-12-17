import * as S from './style';
import { GetServerSidePropsContext } from 'next';
import { Banner } from '../../components/Banner';
import { ClientHeader } from '../../components/ClientHeader';
import { HouseCard } from '../../components/HouseCard';
import { setupAPIClient } from '../../services/api';
import { Footer } from '../../components/Footer';
import { useState } from 'react';

interface IHouseProps{
    id: string,
    title: string,
    price: number,
    area: string,
    bedroom: string,
    type: string,
    status: string,
    thumbnail: string,
    address: string,
}

interface IPropsData{
    sellHouses: IHouseProps[],
}

export default function Vendas({sellHouses}: IPropsData){
    const [houseSelected, setHouseSelected] = useState([]);
    function handleFavorite(id: string){
        const hasFilme = houseSelected?.some((houseSelected) => houseSelected === id)
    
        if (hasFilme) {
            alert("Esse imóvel já existe na lista!");
            return;
        }
    
        setHouseSelected([...houseSelected, id])
    } 

    return(
        <S.Container>
            <ClientHeader />
            <Banner thumbnail='banner-houses.jpg' title='Imóveis para Alugar'/>

            <S.Wrapper>
                <S.DivGridHouses>
                    {
                        sellHouses.map((item, index) => {
                        return(
                            <HouseCard
                                key={item.id}
                                id={item.id}
                                status={item.status}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                address={item.address}
                                area={item.area}
                                bedroom={item.bedroom}
                                type={item.type}
                                price={item.price}
                                handleFavorite={handleFavorite}
                            />
                        );
                        })
                    }
                </S.DivGridHouses>
            </S.Wrapper>
            <Footer />
        </S.Container>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext){
    const apiClient = setupAPIClient(ctx);

    const responseHouseRent = await apiClient.get('/filter/houses',{
        params:{
        status: "Alugar"
        }
    });

    return {
        props:{
            sellHouses:responseHouseRent.data,
        }
    }
}