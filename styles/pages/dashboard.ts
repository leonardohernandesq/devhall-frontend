import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
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
    }
`

export const TitleDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    div{
        width: 50%;
        border-bottom:solid 0.0625rem var(--black-900);
        h2{
            text-align:center;
        }
    }
`

export const PropsDiv = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    >div{
        width: 100%;
    }

    .GapColumn:nth-child(1){
        margin-top: 3.125rem;
        border-right:0.0625rem solid var(--black-900);
        padding: 1.25rem 1.875rem 1.25rem 0rem;
    }
    .GapColumn:nth-child(2){
        margin-top: 3.125rem;
        padding: 1.25rem 0rem 1.25rem 1.875rem;
    }

    @media(max-width:54.6875rem){
        flex-direction: column;

        .GapColumn:nth-child(1){
            padding:0rem;
            border:none;
        }

        .GapColumn:nth-child(2){
        margin-top: 3.125rem;
        padding: 0rem;
    }
    }
`


export const SearchDiv = styled.section`
    margin: 2rem 0rem 1rem 0rem;
    width:100%;
    border: 0.0625rem solid var(--secondary);
    border-radius:0.375rem;

    display: flex;
    align-items: flex-end;

    input{
        position:relative;
        width:100%;
        height: 3.125rem; 
        padding-left: 0.625rem;
        background: transparent;

        border:none;
        outline:none;
    }

    input::placeholder{
        color: var(--secondary);
    }

    button{
        width: 2.5rem;
        height: 3.125rem;
        background-color:transparent;
    }
`

export const DivBroker = styled.div`
    width:100%;
    border:solid 0.0625rem var(--secondary);
    padding: 0.9375rem;
    margin-bottom: 0.9375rem;
    border-radius:0.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);

    svg{
        margin-left:0.5rem
    }

    a{
        background-color: transparent;
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    
    >div{
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
`