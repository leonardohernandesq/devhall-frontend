import * as S from './style';
import {FiMail, FiPhone, FiHeart} from 'react-icons/fi'
import Image from 'next/image';
import logo from '../../../public/images/logo-white-red.svg'
import Link from 'next/link';

export function ClientHeader(){
    return(
        <S.Container>
            <S.ContactContainer>
                <S.ContactWrapper>
                    <S.ContactDiv>
                        <FiMail />
                        <a href="mailto:contato@devhall.com">contato@devhall.com</a>
                    </S.ContactDiv>
                    <S.ContactDiv>
                        <FiPhone />
                        <a href="tel:+351922269284">+351 922 269 284</a>
                    </S.ContactDiv>
                </S.ContactWrapper>
            </S.ContactContainer>
            <S.Wrapper>
                <S.Header>
                    <Link href="/">
                        <Image src={logo} alt="Logo DevHall" height={80}/>
                    </Link>

                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/quem-somos">Quem Somos</Link>
                        <Link href="/vendas">Venda</Link>
                        <Link href="/locacoes">Locação</Link>
                        <Link href="/#contato">Contato</Link>
                        <Link href="/wishlist"><FiHeart size={16}/></Link>
                    </nav>
                </S.Header>
            </S.Wrapper>
        </S.Container>
    );
} 