import styled from "styled-components";

export const Container = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:100%;

    background-color:var(--secondary);

    section{
        color:var(--light-900);
        width:100%;
        max-width: 75rem;
        display: flex;
        justify-content:center;
        padding: 2.5rem 0rem; 
    }

    section:nth-child(2){
        padding:0.625rem;
    }

    section div img{
        width:10.25rem;
        height:auto;
        z-index:9;
        margin-bottom:0.9375rem;
    }
`

export const DivBlocks = styled.section`
    display: flex;
    flex-direction:row;

    >div{
        width: 25%;
        display: flex;
        flex-direction:column;
        padding:0rem 1.25rem;

        @media(max-width:53.125rem){
            width: 100%;
            padding: 1.25rem;
            text-align:center;
            align-items:center;
        }

        :nth-child(-n+3){
            border-right:0.0625rem solid var(--light-900);
        }

        span{
            height:0.125rem;
            width:4.375rem;
            background:var(--light-900);
            margin: 0.3125rem 0rem 1.25rem 0rem;
        }

        h3{
            font-size:1.5rem;
        }

        a:hover{
            color:var(--light-900);
            filter: brightness(80%);
        }
    }

    @media(max-width:53.125rem){
        flex-direction column;
    }
`