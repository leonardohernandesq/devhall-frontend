import * as S from '../../../styles/pages/wishlist';
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button';
import Link from 'next/link';
import { setupAPIClient } from '../../services/api';
import { HouseCard } from '../../components/HouseCard';
import { ClientHeader } from '../../components/ClientHeader';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';


export default function WishList(){
    const [house, setHouse] = useState([])

    useEffect(() => {
        const list = localStorage.getItem("@devhall");
        const housesSelected = JSON.parse(list)
        setHouse(housesSelected)
    }, [])

    async function handleFavorite(id: string){
        const apiClient = setupAPIClient();
        
        const response = await apiClient.get('/detail/house', {
            params:{
            id: id
            }
        })
    
        const houses = localStorage.getItem('@devhall')
    
        let housesArray = JSON.parse(houses) || [];
    
        const hasFilme = housesArray.some((houseSelected) => houseSelected.id === id)
    
        if (hasFilme) {
            alert("Esse imóvel já existe na lista!");
            return;
        }
    
        housesArray.push(response.data);
        localStorage.setItem("@devhall", JSON.stringify(housesArray));
    }  

    return(
        <S.Container>
            <ClientHeader />
            <Banner thumbnail='banner-houses.jpg' title='Lista de Favoritos'/>

            <S.Wrapper>

            {
                house !== null ?
                    <S.DivGridHouses>
                        {house.map((item, index) => {
                            return(
                                <HouseCard 
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    area={item.area}
                                    bedroom={item.bedroom}
                                    type={item.type}
                                    status={item.status}
                                    thumbnail={item.thumbnail}
                                    address={item.address}
                                    handleFavorite={handleFavorite}
                                />
                            )
                        })}
                    </S.DivGridHouses>
                :
                <S.SaveDiv>
                    <div>
                        <h1>Você não possui nenhum imóvel salvo</h1>
                            <Link href="/">
                                <Button bg='var(--primary)' color='var(--light-900)'>
                                        Voltar para Home
                                </Button>
                            </Link>
                    </div>
                </S.SaveDiv>
            }
            </S.Wrapper>
            <Footer />
        </S.Container>
    );

}