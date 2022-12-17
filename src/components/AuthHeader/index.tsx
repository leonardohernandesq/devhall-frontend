import * as S from './style';
import Image from 'next/image';
import Link from 'next/link';
import {FiLogOut} from 'react-icons/fi'

import Logo from './../../../public/images/logo-black-red.svg'
import { signOut } from '../../contexts/AuthContext';

export function AuthHeader() {
  return (
    <>
      <S.Container>
          <S.Header>
            <Link href="/">
              <Image src={Logo} alt="Logo da empresa sendo um DH preto com um telhado vermelho formando uma casinha e a escrita preta Dev Hall no lado esquerdo" height={70}/>
            </Link>

            <nav>
              <Link href='/dashboard'>Dashboard</Link>
              <Link href='/corretores'>Corretores</Link>
              <Link href='/imoveis'>Cadastrar Imóveis</Link>
              <a onClick={signOut}>
                <FiLogOut />
              </a>
            </nav>
          </S.Header>
      </S.Container>
    </>
  )
}
