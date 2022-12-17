import Image from 'next/image';
import * as S from './style';

import logo from '../../../public/images/logo-monocromatico.svg'
import Link from 'next/link';


export function Footer(){
    return(
        <S.Container>
            <S.DivBlocks>
                <div>
                    <Link href="/">
                        <Image src={logo} alt={'logo da empresa'}/>
                    </Link>
                    <p>Vendemos mais do que imóveis, A casa dos seus sonhos ao nosso dispor</p>
                </div>

                <div>
                    <h3>Importante</h3>
                    <span></span>
                    <Link href="#">Política de Privacidade</Link>
                    <Link href="#">Política de Cookies</Link>
                    <Link href="#">Política de Uso</Link>
                </div>

                <div> 
                    <h3>Menu</h3>
                    <span></span>
                    <Link href="/">Home</Link>
                    <Link href="/quem-somos">Quem Somos</Link>
                    <Link href="/vendas">Imóveis</Link>
                    <Link href="/#contato">Contato</Link>
                </div>

                <div>
                    <h3>Contatos</h3>
                    <span></span>
                    <Link href="tel:+351922269284">+351 922 269 284</Link>
                    <Link href="mailto:contato@devhall.com.br">contato@devhall.com.br</Link>
                    <Link href="#">R. Afonso Nelson | 42 - Tremembé - SP</Link>
                </div>
            </S.DivBlocks>
            <section> Desenvolvido por Leonardo Hernandes | Lh Dev </section>
        </S.Container>
    );
}