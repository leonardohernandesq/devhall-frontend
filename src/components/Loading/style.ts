import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    flex-direction:column;
`

export const Spinner = styled.span`
    height: 50px;
    width: 50px;
    border-radius:50%;
    border: 4px solid var(--primary);
    animation: spinner 1.2s ease infinite;
    border-color: var(--primary) var(--light-900) ;
    margin: 2rem;

    @keyframes spinner{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

`