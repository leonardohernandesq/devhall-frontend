import React, {useState, useRef, RefObject} from 'react';
import Image from 'next/image';
import * as S from '../../styles/home';

import banner from '../../public/images/banner-home.jpg';
import contactimage from '../../public/images/banner-contact.jpg';

import { ClientHeader } from '../components/ClientHeader';
import { Button } from '../components/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HouseCard } from '../components/HouseCard';
import { Input, Textarea } from '../components/Input';
import { Footer } from '../components/Footer';
import { setupAPIClient } from '../services/api';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import Router from 'next/router';

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
  rentHouses: IHouseProps[],
}

export default function Home({sellHouses, rentHouses}: IPropsData) {
  const [bedroom, setBedroom] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const [area, setArea] = useState(undefined);
  const [value, setValue] = useState(0);
  const carouselMain = useRef<HTMLDivElement>(null);
  const carouselSecondary = useRef<HTMLDivElement>(null);

  function handleLeftClick(ref: RefObject<HTMLDivElement>){
    if(!ref.current){
      return null
    } else {
      ref.current.scrollLeft -= 412;
    }
  }

  function handleRightClick(ref: RefObject<HTMLDivElement>){
    if(!ref.current){
      return null
    } else {
      ref.current.scrollLeft += 412;
    }
  }

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

  async function handleForm(e: any){
    e.preventDefault();
    
    Router.push({
      pathname: '/filter',
      query: {
        bedroom: bedroom,
        area: area,
        price: value,
        type: type,
        status: status,
        limite: 10000000,
      }
  })
  }

  return (
    <>
      <ClientHeader />
        
      <S.Container>
        <Image src={banner} alt="Banner da Home" />

          <form onSubmit={handleForm}>
          <S.DivInputSearch>
              <input placeholder='Nº de Quartos' type="text" value={bedroom} onChange={(e) => setBedroom(e.target.value)}/> 
              <input placeholder='Tipo do imóvel' type="text" value={type} onChange={(e) => setType(e.target.value)}/> 
              <input placeholder='Status' type="text" value={status} onChange={(e) => setStatus(e.target.value)}/> 
              <input placeholder='Área | m²' type="text" value={area} onChange={(e) => setArea(e.target.value)}/>
              <S.RangeInput>
                <label>Preço: R${value === undefined ? 0 : value} a R$10.000.000</label>
                <input type="range" min="2000" value={value} max="10000000" step="2000" onChange={(e) => setValue(Number(e.target.value))}/> 
              </S.RangeInput>

              <Button bg='var(--primary)' color='var(--light-900)'>
                Procurar...
              </Button>
          </S.DivInputSearch>
        </form>

        <S.Wrapper>
          {/* Parte de Venda */}
          <div className='SellDiv'>
            <S.DivHeaderSection>
              <h2>Imóveis para Vender</h2>
              <Link href="/vendas">
                <button> 
                  Veja todos imóveis
                </button>
              </Link>
            </S.DivHeaderSection>
            <div className='CarrouselWrapper'>
              <button onClick={() => handleLeftClick(carouselMain)} className='LeftButton'> <FiChevronLeft size={30} color={'var(--primary)'} /> </button>          
              <S.DivCarrousel ref={carouselMain}>                
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
              </S.DivCarrousel>
              <button onClick={() => handleRightClick(carouselMain)} className='RightButton'> <FiChevronRight size={30} color='var(--primary)'/> </button>

              <S.DivCarrouselMobile>
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
              </S.DivCarrouselMobile>
            </div>
          </div>
        </S.Wrapper>

        <S.RentContainer>
          <S.Wrapper>
                    
          {/* Parte de Locação */}
          <div className='RentContainer'>
            <S.DivHeaderSection>
              <h2>Imóveis para Locação</h2>
              <Link href="/locacoes">
                <button>Veja todos imóveis</button>
              </Link>
            </S.DivHeaderSection>
            <div className='CarrouselWrapper'>
              <button onClick={() => handleLeftClick(carouselSecondary)} className='LeftButton'> <FiChevronLeft size={30} color={'var(--light-900)'} /> </button>          
              <S.DivCarrousel ref={carouselSecondary}>
                {
                  rentHouses?.map((item, index) => {
                    return(
                      <HouseCard
                        key={item?.id}
                        id={item?.id}
                        status={item?.status}
                        thumbnail={item?.thumbnail}
                        title={item?.title}
                        address={item?.address}
                        area={item?.area}
                        bedroom={item?.bedroom}
                        type={item?.type}
                        price={item?.price}
                        className="card"
                        handleFavorite={handleFavorite}
                      />
                    );
                  })
                }
              </S.DivCarrousel>
              <button onClick={() => handleRightClick(carouselSecondary)} className='RightButton'> <FiChevronRight size={30} color='var(--light-900)'/> </button>

              <S.DivCarrouselMobile>
              {
                  rentHouses?.map((item, index) => {
                    return(
                      <HouseCard
                        key={item?.id}
                        id={item?.id}
                        status={item?.status}
                        thumbnail={item?.thumbnail}
                        title={item?.title}
                        address={item?.address}
                        area={item?.area}
                        bedroom={item?.bedroom}
                        type={item?.type}
                        price={item?.price}
                        className="card"
                        handleFavorite={handleFavorite}
                      />
                    );
                  })
                }
              </S.DivCarrouselMobile>
            </div>
          </div>
          </S.Wrapper>
        </S.RentContainer>

        <S.Wrapper id="contato">
          <S.CardContact>
            <div>
                <Image src={contactimage} alt="Banner de casa para contato"/>
            </div>
            <div className='DivContact'>
              <h2>Entre em Contato</h2>

              <Input type="text" label='Nome' required/>
              <Input type="tel" label='Telefone' required/>
              <Input type="text" label='Assunto' required/>
              <Textarea label='Mensagem' required/>
              <Button bg={'var(--primary)'} color={'var(--light-900)'}>
                Enviar
              </Button>
            </div>
          </S.CardContact>
        </S.Wrapper>

        <Footer />
      </S.Container>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext){
  const apiClient = setupAPIClient(ctx);

  const responseHouseSell = await apiClient.get('/filter/houses', {
    params:{
      status: "Vender"
    }
  });

  const responseHouseRent = await apiClient.get('/filter/houses',{
    params:{
      status: "Alugar"
    }
  });

  return {
    props:{
      sellHouses:responseHouseSell.data,
      rentHouses:responseHouseRent.data,
    }
  }
}