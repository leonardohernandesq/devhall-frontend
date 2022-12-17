import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
` 

export const ContactWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    max-width:75rem;
    width:100%;

    @media(max-width: 78.125rem){
        width:90%
    }
`

export const ContactDiv = styled.div`
    display:flex;
    align-items:center;

    svg{
        margin-right:0.625rem  
    }

    a:hover{
        color: var(--light-900)
    }
`

export const ContactContainer = styled.div`
    width:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 0.3125rem 0rem;
    background-color:var(--secondary);
    color: var(--light-900);
    
`

export const Wrapper = styled.div`
    max-width:75rem;
    width:100%;

    @media(max-width: 78.125rem){
        width:90%
    }
`


export const Header = styled.header`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 0.9375rem 0rem;
    margin-bottom:-8.125rem;
    z-index:99;

    nav{
        display: flex;
    }

    nav a{
        display: flex;
        align-items:center;
        justify-content:center;
        margin-left: 0.9375rem;
        color:var(--light-900)
    }

    @media(max-width: 53.125rem){
        flex-direction: column;
        margin-bottom:-9.375rem;

        img{
            margin-bottom:0.625rem;
        }
    }
`