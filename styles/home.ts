import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    width: 100%;

    img{
        width:100%;
        height: 37.5rem;
        z-index: -1;
        position:relative;
    }

    form{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media(max-width:850px){
        img{
            height: 40rem;
        }
    }

    @media(max-width:460px){
        img{
            height: 45rem;
        }
    }

`

export const DivInputSearch = styled.div`
    display: grid;
    max-width:75rem;
    width:100%;
    grid-template-columns: auto auto auto;
    column-gap:0.9375rem;
    position:absolute;
    top: 28.125rem;
    input{
        background-color: rgba(255,255,255,0.7);
        height:3.75rem;
        margin: 0.375rem 0rem;
        border: 0.0625rem solid var(--primary);
        padding: 0.3125rem 0.3125rem 0.3125rem 0.9375rem;
        outline: none;
        border-radius: 0.625rem;
    }

    button{
        margin: 0.375rem 0rem;
    }

    @media(max-width:78.125rem){
        width:90%;
    }
    @media(max-width:53.125rem){
        grid-template-columns: auto auto;
        top: 25rem;
    }
    @media(max-width:28.75rem){
        grid-template-columns: auto;
        top: 18rem;
    }
`

export const RangeInput = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color: rgba(255,255,255,0.7);
    height:3.75rem;
    margin: 0.375rem 0rem;
    border: 0.0625rem solid var(--primary);
    outline: none;
    border-radius: 0.625rem;

    input[type="range"]{
        padding:0rem;
        margin:0rem;
        height:auto;
        width:70%;
        accent-color: var(--primary);
    }
`

export const Wrapper = styled.div`
    width:100%;
    max-width:75rem;
    display: flex;
    flex-direction: column; 
    margin-top: 2.5rem;
    margin-bottom: 3.4375rem;

    .CarrouselWrapper{
        display: flex;
        position:relative;
        align-items:center;
        .LeftButton{
            position: absolute; 
            height: 1.875rem;
            background:transparent;
            left: -2.5rem;
            height:100%;

            @media(max-width:78.125rem){
                display: none;
            }
        }
        .RightButton{
            position: absolute; 
            height: 1.875rem;
            background:transparent;
            right: -2.5rem;
                    
            @media(max-width:78.125rem){
                display: none;
            }
        }

        @media(max-width:78.125rem){
            width:100%;
            align-items:center;
        }
        
    }

    .RentContainer{
        display: flex;
        width:100%;
        flex-direction:column;
        *{
            border-color:white;
        }
        h2, p, svg{
            color: var(--light-900);
        }

        button{
            background: var(--light-900);
            color: var(--secondary);
        }
        @media(max-width:78.125rem){
            width:90%;
        }
    }

    @media(max-width:78.125rem){
        width:100%;
        align-items:center;
        .SellDiv{
            width:90%;
        }
    }
    
    .SellDiv{
        display: flex;
        width:100%;
        flex-direction:column;
        @media(max-width:78.125rem){
            width:90%;
        }
    }
    
`

export const DivCarrousel = styled.div`
    display: flex;
    scroll-behavior: smooth;
    overflow: hidden;
    gap: 2.5rem;

    .card{
        color: var(--light-900);
        border: 0.0625rem solid var(--light-900);

        p, svg, h2{
            color:var(--light-900);
        }

        span{
            background: var(--secondary);
        }

        .value{
            background:var(--light-900);
            color:var(--secondary);
            border: 0.0625rem solid var(--light-900);
        }

        .style__IconsDiv-sc-a7a1850f-4{
            border: 0.0625rem solid var(--light-900);
        }
    }
    

    @media(max-width:78.125rem){
        display: none;
    }
`

export const DivHeaderSection = styled.div`
    display: flex;
    justify-content:space-between;
    margin: 0.9375rem 0rem;

    h2{
        font-weight:400;
    }

    a button{
        background-color: var(--primary);
        color: var(--light-900);
        padding: 0.375rem 0.9375rem;
        margin-right:0.25rem;
        border-radius: 0.375rem;
    }

`

export const RentContainer = styled.div`
    width:100%;
    background-color: var(--secondary);
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`

export const CardContact = styled.div`
    width: 100%;
    border-radius:1.5rem;
    margin:32px 0px 16px 0px;
    box-shadow: 0rem 0rem 0.625rem rgba(0,0,0,0.25);
    display: flex;

    @media(max-width:78.125rem){
        width:90%;
    }

    @media(max-width:56.25rem){
        
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
            margin-bottom: 25.6px;
        }

        >div{
            width:100%;
            display: flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }

        @media(max-width:56.25rem){
            width:100%;
        }
    }

    @media(max-width:56.25rem){
        width:90%;
        margin: 0 1.25rem;
    }
`

export const DivCarrouselMobile = styled.div`
    min-width:100%;
    color:var(--light-900);

    >div{
        margin-bottom: 1.25rem;
    }

    @media(min-width:78.125rem){
        display: none;
    }
`