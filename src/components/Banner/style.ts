import styled, {css} from "styled-components";

interface IBackground{
    bg: string;
}

export const Container = styled.section<IBackground>`
    width:100%;
    height:18.75rem;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    z-index:-1;

    @media(max-width:850px){
        >h1{
            margin-top:5rem;
        }
    }

    h1{
        font-size: 2rem;
        color:var(--light-900)
    }

    ${props => css`
        background-image: ${`url(/images/${props.bg})`};
    `}
`