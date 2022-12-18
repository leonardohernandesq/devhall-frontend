import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width: 100%;

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

    @media(max-width:78.125rem){
        width:90%;
    }

    form{
        display: flex;
        flex-direction:column;

        div{
            display: grid;
            grid-template-columns: auto;
            column-gap: 1.25rem;
        }

        .column-2{
            display: grid;
            grid-template-columns: auto auto;
            width: 100%;

            @media(max-width:46.875rem){
                grid-template-columns: auto;
            }

        }
        .column-3{
            display: grid;
            grid-template-columns: auto auto auto;
            width: 100%;
            align-items:center;

            @media(max-width:46.875rem){
                grid-template-columns: auto;
            }
        }

        select{
            background: var(--light-900);
            border: solid 0.0625rem var(--black-600);
            height: 3.75rem;
            width:100%;
            color:var(--black-900);

            padding: 0rem 0rem 0rem 0.625rem;
            margin-top:0.625rem;
            border-radius: 0.625rem;
            outline:none;
            transition: all .3s ease-out;
        }
    }
`