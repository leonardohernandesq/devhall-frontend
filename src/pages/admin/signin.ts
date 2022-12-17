import styled from "styled-components";

export const Container = styled.div`
    height:100vh;
    overflow:hidden;
    display:flex;


`

export const DivImage = styled.div`
    width: 50%;
    img{
        width:100%;
    }

    @media(max-width:59.375rem){
        display: none;
    }
`

export const DivContent = styled.div`
    padding: 0 9.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:50%;

    form{
        width: 100%;
    }

    img{
        padding-bottom:1.25rem
    }

    @media(max-width:81.25rem){
        padding:0 4.375rem;
    }

    @media(max-width:59.375rem){
        width:100%;
        padding: 0 3rem;
    }
`