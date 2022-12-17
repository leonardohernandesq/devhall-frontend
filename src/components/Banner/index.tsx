import * as S from './style'

interface IPropsBanner{
    title: string;
    thumbnail: string;
}

export function Banner({title, thumbnail}: IPropsBanner){
    return(
        <S.Container bg={thumbnail}>
            <h1>{title}</h1>
        </S.Container>
    );
}

//../../../public/images/