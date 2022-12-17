import styled from 'styled-components';

export const Container = styled.div`
    border:0.0625rem solid var(--primary);
    border-radius: 0.625rem 0.625rem 0 0;
    width:100%;
    min-width: 23.25rem;


    h2{
        text-align:center;
        padding: 0.625rem;
        color: var(--primary);
    }

    .value{
        background: var(--primary);
        color: var(--light-900);
        height: 4.375rem;
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content:center;
        border:0.0625rem solid var(--primary);
    }
`

export const ImageContainer = styled.div`
    position:relative;
    img{
        border-radius: 0.625rem 0.625rem 0 0;
        height:15rem;
        width:100%;
        object-fit: cover;
        z-index:1;
    }

    span{
        position:absolute;
        padding: 0.25rem 2.5rem;
        background-color: var(--primary);
        font-size:1rem;
        color: var(--light-900);
        text-transform: capitalize;
        border-radius: 0.625rem 0rem 0rem 0rem;
        z-index:2;
    }
`

export const HeartIconDiv = styled.button`
    background-color:var(--light-900);
    height: 1.875rem;
    width: 1.875rem;
    border-radius:0.9375rem;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    z-index:2;

    position:absolute;
    bottom:1.25rem;
    right: 0.625rem;
`

export const IconContainer = styled.div`
    display: grid;
    width:100%;
    grid-template-columns: auto auto;
`

export const IconsDiv = styled.div`
    width:100%;
    height:5rem;
    padding:0.3125rem;
    display: flex;
    align-items:center;
    justify-content:center;
    border:0.0625rem solid var(--primary);

    svg{
        color: var(--primary);
        margin-right:0.375rem;
    }

    p{
        font-size: 14.4px;
        color: var(--primary);
    }
`

export const ButtonContainer = styled.button`
    background: transparent;
`