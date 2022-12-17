import styled, {css} from "styled-components";

interface IColors {
    color: string;
    background: string;
}

export const Button = styled.button<IColors>`
    text-transform: uppercase;
    border-radius:0.625rem;
    height:3.75rem;
    width: 100%;
    margin: 0.625rem 0rem 0.625rem 0rem;

    
    ${props => css`
        color:${props.color};
        background: ${props.background};
    `};
`;