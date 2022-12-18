import * as S from '../../../styles/pages/quem-somos';

import { Banner } from '../../components/Banner';
import { ClientHeader } from '../../components/ClientHeader';
import { Button } from '../../components/Button';
import { Input, Textarea } from '../../components/Input';
import { Footer } from '../../components/Footer';

import Image from 'next/image';

import AboutImage from '../../../public/images/image-about.jpg';
import contactimage from '../../../public/images/banner-contact.jpg'

export default function QuemSomos(){
    return(
        <S.Container>
            <ClientHeader />
            <Banner title='Quem Somos' thumbnail='banner-about.jpg'/>

            <S.Wrapper>
                <div>
                    <S.DivAbout>
                        <Image src={AboutImage} alt="Imagem quem somos"/>
                    </S.DivAbout>
                    <S.DivAbout>
                        <h2>A Dev Hall</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proid do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proid</p>
                        <Button bg='var(--primary)' color='var(--light-900)'>
                            Fale Conosco
                        </Button>
                    </S.DivAbout>
                </div>
            </S.Wrapper>

            <S.MidBanner>
                <h2>Confira os imóveis disponíveis</h2>
                <Button bg='var(--primary)' color='var(--light-900)'>
                    Clique Aqui!
                </Button>
            </S.MidBanner>

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
            <Footer />
        </S.Container>
    );
}