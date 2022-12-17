import styled, {css} from "styled-components";

interface IBackground{
    bg: string;
}

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: 100%;
`

export const Wrapper = styled.div`
    max-width:75rem;
    width:100%;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;


    h2{
        color:var(--primary);
        margin-bottom: 0.625rem
    }

    @media(max-width:78.125rem){
        width:90%;
    }
    
    `

export const Banner = styled.div<IBackground>`
    width:100%;
    height:26rem;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    @media(max-width:53.125rem){
        height:30rem;

        h1{
            margin-top: 2rem;
        }
    }

    ${props => css`
        background-image: url(http://localhost:3333/files/${props.bg});
    `}
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    color:var(--light-900);
    z-index:-1;

    .brightness-image{
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background-color: rgba(0,0,0,0.5);
        height:100%;
        width:100%;

        h1{
            font-size:2.6rem;
            margin-bottom:1rem;
        }

        .buttonPrice{
            margin-top: 1rem;
            margin-bottom:-5rem;
            background: var(--primary);
            padding: 0.4rem 4rem;
            font-size:1.4rem;
        }
    }
`   

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--primary);
    margin: 2rem 0rem;

    div{
        display: flex;
        flex-direction: column;
        align-items:center;
        text-align:center;
        justify-content:center;
        padding: 0.5rem 0.875rem;
        width: 7.5rem;

        p{
            margin-top: 0.625rem;
            font-weight:500;
            line-height: 1.125rem;
        }
    }

    div:nth-child(-n+2){
        border-right: 0.0625rem solid var(--primary);
    }
`;

export const Broker = styled.div`
    color: var(--primary);

    p{
        margin-bottom:0.6rem;
    }

    a{
        display: flex;
        align-items:center;
        justify-content:center;
    }

    .mail{
        background-color: #0097EC;
    }

    .whatsapp{
        background-color: #00B11C;
    }
    
    .phone{
        background-color: var(--secondary);
    }

    .midias{
        display: flex;
        justify-content:center;
        align-items:center;
        height: 3.125rem;
        width: 3.125rem;
        margin: 0.3rem 0.5rem 0rem 0rem;
        color:var(--light-900);
        border-radius: 0.5rem;
    }

    section{
        display: flex;
        padding-bottom: 5rem;

        ul {
            position: relative;
            display: flex;
            transform-style: preserve-3d;
        }
        ul li {
            position: relative;
            list-style: none;
            width: 3.75rem;
            height: 3.75rem;
            margin: 0rem 1.25rem 0rem 0rem;

        }
    
        ul li span{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex !important;
            background: var(--secondary);
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 1.875rem !important;
            transition: 1.5s ease-out;
            border-radius:16px;
        }
        ul li:hover span {
        z-index: 1000;
        transition: .3s;
        color: #fff;
        }
        ul li:hover span:nth-child(5){
        transform: translate(1.25rem, 2.5rem);
        opacity: 1;
        }
        ul li:hover span:nth-child(4){
        transform: translate(0.9375rem, 1.875rem);
        opacity: .8;
        }
        ul li:hover span:nth-child(3){
        transform: translate(0.625rem, 1.25rem);
        opacity: .6;
        }
        ul li:hover span:nth-child(2){
        transform: translate(0.3125rem, 0.625rem);
        opacity: .4;
        }ul li:hover span:nth-child(1){
        transform: translate(0rem, 0rem);
        opacity: .2;
        }
        ul li:nth-child(1):hover span{
        background: #00B11C !important;
        }
        ul li:nth-child(2):hover span{
        background: #2C3456 !important;
        }
        ul li:nth-child(3):hover span{
        background: #0097EC !important;
        }

    }
`