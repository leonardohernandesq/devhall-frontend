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

export const Wrapper = styled.div`
    max-width:1200px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 1rem;
`

export const DivGridHouses = styled.div`
    padding:40px 0;
    display: grid;
    align-items:center;
    justify-content:center;
    grid-template-columns: auto auto auto;
    gap:25px;

    @media(max-width:1250px){
        grid-template-columns: auto auto;
        width:100%;
    }

    @media(max-width:850px){
        grid-template-columns: auto;
        width:100%;
    }
`