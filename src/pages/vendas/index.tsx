import * as S from '../../../styles/pages/vendas';
import { GetServerSidePropsContext } from 'next';
import { Banner } from '../../components/Banner';
import { ClientHeader } from '../../components/ClientHeader';
import { HouseCard } from '../../components/HouseCard';
import { setupAPIClient } from '../../services/api';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';

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
        localStorage.setItem('@devhall', JSON.stringify(houseSelected))
    }  

    return(
        <S.Container>
            <ClientHeader />
            <Banner thumbnail='banner-houses.jpg' title='Imóveis para Venda'/>

            <S.Wrapper>
                <S.DivGridHouses>
                    {
                        sellHouses.map((item, index) => {
                        return(
                            <HouseCard
                                id={item.id}
                                key={item.id}
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

    const responseHouseSell = await apiClient.get('/filter/houses',{
        params:{
        status: "Vender"
        }
    });

    return {
        props:{
            sellHouses:responseHouseSell.data,
        }
    }
}