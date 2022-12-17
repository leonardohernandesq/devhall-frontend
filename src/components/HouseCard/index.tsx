/* eslint-disable @next/next/no-img-element */
import * as S from './style'
import { HTMLAttributes, useState, useEffect } from 'react' 
import { FiHeart, FiMapPin, FiHome, FiMinimize2, FiUsers } from 'react-icons/fi'
import Link from 'next/link';


interface IPropsHouse extends HTMLAttributes<HTMLDivElement>{
    id: string,
    status: string,
    thumbnail: string,
    title: string, 
    address: string,
    area: string,
    bedroom: string,
    type: string,
    price: number,
    handleFavorite: (id: string) => void,
}

export function HouseCard({id, status, thumbnail, title, address, area, bedroom, type, price, handleFavorite, ...rest}: IPropsHouse){
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        let x = localStorage.getItem('@devhall');
        const newArray = JSON.parse(x);

        if(newArray !== null || newArray !== undefined){
            newArray?.map((item) => {
                if(item.id === id){
                    setSelected(true)
                }
            })
        }
    }, [id])

    function handleFavoriteAdd(){
        handleFavorite(id)
        setSelected(true)
    }

    return(
        <S.Container {...rest}>
            <S.ImageContainer>
                <span>{status}</span>
                <S.HeartIconDiv onClick={() => handleFavoriteAdd()} style={selected === true ? {backgroundColor: '#F00'} : {backgroundColor: '#fff'}}>
                    <FiHeart color={selected === true ? 'white' : 'red'}/>
                </S.HeartIconDiv>
                    
                    <img src={`http://localhost:3333/files/${thumbnail}`} alt="Imagem do imóvel "/>
            </S.ImageContainer>
                <h2>{title}</h2>
            <S.IconContainer>
                <S.IconsDiv>
                    <FiMapPin size={18}/>
                    <p>{address.split(" - ", 1)}</p>
                </S.IconsDiv>
                <S.IconsDiv>
                    <FiMinimize2 size={18}/>
                    <p>{area} m²</p>
                </S.IconsDiv>
                <S.IconsDiv>
                    <FiUsers size={18}/>
                    <p>{bedroom == '1' ? bedroom +' Quarto' : bedroom +' Quartos'}</p>
                </S.IconsDiv>
                <S.IconsDiv>
                    <FiHome size={18}/>
                    <p>{type}</p>
                </S.IconsDiv>
            </S.IconContainer>
            <div className='value'>
                <strong>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                <Link href={`/imovel/${id}`}>
                    Ver Mais
                </Link>
            </div>
        </S.Container>
    );
}