import * as S from './style'
import { withRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { setupAPIClient } from '../../services/api'
import { ClientHeader } from '../../components/ClientHeader';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import Link from 'next/link';
import { HouseCard } from '../../components/HouseCard';
import { Banner } from '../../components/Banner';


function Filter({ router }){
    const apiClient = setupAPIClient();
    const [filter, setFilter] = useState([])
    useEffect(() => {
        async function RequestProps(){
            const response = await apiClient.get('/filter/houses',{
                params:{
                    bedroom: router.query.bedroom || undefined,
                    area: router.query.area || undefined,
                    price: router.query.price || undefined,
                    type: router.query.type || undefined,
                    status: router.query.status || undefined,
                    limite: 10000000,
                }
            })

            setFilter(response.data)
        }

        RequestProps();
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
        <Banner thumbnail='banner-houses.jpg' title='Filtros Personalizados'/>

        <S.Wrapper>

        {
            filter.length !== 0 ?
                <S.DivGridHouses>
                    {filter.map((item, index) => {
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
                    <h1>A sua busca é inválida, tente novamente</h1>
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

export default withRouter(Filter)