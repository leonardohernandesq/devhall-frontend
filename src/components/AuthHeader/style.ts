import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
` 

export const Header = styled.header`
    max-width:75rem;
    width:100%;
    padding: 0.9375rem 0rem;
    display: flex;
    justify-content:space-between;
    align-items:center;

    nav{
        display: flex;
        align-items:center;

        a{
            padding-left:1.875rem;
            display: flex;
        }
    }

    @media(max-width: 75rem){
        width: 90%;
    }

    @media(max-width:46.875rem){
        flex-direction: column;

        img{
            margin-bottom: 0.9375rem;
            height:3.125rem;
        }

        nav a{
            padding-left:0.9375rem;
            margin-bottom:0.3125rem;
        }
    }
`