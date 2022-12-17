import styled from "styled-components";

export const Container = styled.div`
    >section{
        height:432px;
    }

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
    margin-top: 1rem;

    @media(max-width: 75rem){
        width: 90%;

        >div{
            width:100%;
            display: flex;
            flex-direction:column;
        }
    }

    >div{
        display: flex;
        align-items:center;
        padding: 3.75rem 0 5rem 0;
    }
`

export const DivAbout = styled.div`
    width:50%;
    padding:0rem 0rem 0rem 3.75rem;
    margin:0.625rem 0rem;

    @media(max-width:78.125rem){
        width:100%;
        margin:1.875rem 0rem;
        padding:0rem;
    }

    h2{
        color: var(--primary);
        font-size: 2rem;
        margin-bottom: 1.2rem;
    }

    button{
        width:16.25rem;
        margin-top: 1.4rem;
    }

    :nth-child(1){
        background: var(--secondary);
        border-radius:0.625rem;
        padding:0rem;

        img{
            width:100%;
            height:100%;
            margin:1.5625rem 0rem -1.25rem 1.5625rem;
            padding:0rem;
            border-radius:0.625rem;
        }

        
        @media(max-width:78.125rem){
            img{
                margin:0rem;
            }
        }
    }
`

export const MidBanner = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height: 15rem;
    background-image: url('images/midbanner.jpg');

    >h2{
        margin-top:0.625rem;
        font-size:2.875rem;
        color:var(--light-900);
    }

    button{
        width:12.5rem;
    }

    @media(max-width:50rem){
        height:18.75rem;
        text-align:center;

        >h2{
            font-size:2.375rem;
        }
    }
`
export const CardContact = styled.div`
    width: 100%;
    max-width:75rem;
    border-radius:1.5rem;
    margin:4rem 0rem 4rem 0rem;
    box-shadow: 0rem 0rem 0.625rem rgba(0,0,0,0.25);
    display: flex;
    
    @media(max-width:78.125rem){
        width: 90%;

        >div:nth-child(1){
            display: none;
        }

        >div{
            width:100%;
        }
    }

    >div{
        width:50%;
    }



    img{
        border-radius:1.5rem 0rem 0rem 1.5rem;
        height:100%;
        object-fit:cover;
    }

    .DivContact{
        padding: 2.5rem;
        h2{
            font-weight:400;
            color:var(--primary);
            margin-bottom: 1.6rem;
        }

        >div{
            width:100%;
            display: flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }

        @media(max-width:78.125rem){
            width:100%;
        }
    }
`   