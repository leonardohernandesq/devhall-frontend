import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    width: 100%;

    >section{
        height:27rem;
    }
`

export const SaveDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 10rem 0rem;
    width:100%;
    div{
        max-width:31.25rem;
        width:90%;

        h1{
            margin-bottom: 1rem ;
            text-align:center;
        }
    }
`

export const Wrapper = styled.div`
    max-width:75rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 1rem;
`

export const DivGridHouses = styled.div`
    padding:2.5rem 0;
    display: grid;
    align-items:center;
    justify-content:center;
    grid-template-columns: auto auto auto;
    gap:1.5625rem;

    @media(max-width:78.125rem){
        grid-template-columns: auto auto;
        width:90%;
    }

    @media(max-width:53.125rem){
        grid-template-columns: auto;
        width:90%;
    }
`