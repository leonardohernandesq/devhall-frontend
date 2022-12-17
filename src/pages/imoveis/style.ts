import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: 100%;
    padding-bottom: 3.75rem;

    
    @media(max-width:53.125rem){
        >section{
            >h1{
                margin:0rem;
            }
        }
    }
`

export const Wrapper = styled.div`
    max-width:75rem;
    width:100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    form{
        margin-top:2.5rem;
    }
    
    .column-3{
        display: grid;
        grid-template-columns: auto auto auto;
        width: 100%;
        column-gap: 1.25rem;
    }
    .column-2{
        display: grid;
        grid-template-columns: auto auto;
        width: 100%;
        column-gap: 1.25rem;
    }

    select{
        background: var(--light-900);
        border: solid 0.0625rem var(--black-600);
        height: 3.75rem;
        width:100%;
        margin:0.9375rem 0rem 0.3125rem 0rem;
        color:var(--black-900);
        font:400 16px 'Poppins',sans-serif;
        

        padding: 0rem 0rem 0rem 0.625rem;
        border-radius: 0.625rem;
        outline:none;
        transition: all .3s ease-out;
    }

    option{
        font:400 16px 'Poppins',sans-serif;
        padding: 0.625rem 0rem;

    }

    
    @media(max-width: 75rem){
        width: 90%;
    }

    @media(max-width: 36.875rem){
        .column-3{
            grid-template-columns: auto;
        }
    }

`

export const LabelThumbnail = styled.label`
    position: relative;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 100%;
    height: 15.625rem;
    border-radius:0.625rem;
    border: 0.0625rem solid var(--secondary);
    color: var(--secondary);

    input{
        display: none;
        cursor:pointer;
    }

    input:disabled + .preview{
        cursor: not-allowed;
    }

    svg{
        margin-bottom:0.625rem;
        z-index:99;
        opacity:0.5;
    }

    .preview{
        height: 100%;
        width: 100%;

        position: absolute;
        object-fit: cover;
        border-radius: 0.625rem;
    }
`

