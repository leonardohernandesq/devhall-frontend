import styled from "styled-components";

export const Input = styled.input`
    background: var(--light-900);
    border: solid 0.0625rem var(--black-600);
    height: 3.75rem;
    width:100%;
    color:var(--black-900);

    padding: 0rem 0rem 0rem 0.625rem;
    border-radius: 0.625rem;
    outline:none;
    transition: all .3s ease-out;

    &:focus, &:valid {
        border: solid 0.0625rem var(--primary);
    };
`
export const InputTextArea = styled.textarea`
    background: var(--light-900);
    border: solid 0.0625rem var(--black-600);
    height: 12.5rem;
    width:100%;
    color:var(--black-900);

    padding: 0.9375rem;
    border-radius: 0.625rem;
    outline:none;
    transition: all .3s ease-out;
    resize: none;

    &:focus, &:valid {
        border: solid 0.0625rem var(--primary);
    };
`

export const DivFloat = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    position: relative;
    padding-top: 0.625rem;
    margin-top: 0.3125rem;
    margin-bottom: 0.3125rem;

    .input-float:focus + label, .input-float:valid + label {
        font-size:0.8125rem;
        color: var(--primary);
        margin-top:0;
        background: var(--light-900);
    }
`

export const Label = styled.label`
    color: var(--black-900);
    pointer-events: none;
    position: absolute;
    top:0;
    left:0.625rem;
    margin-top: 1.625rem;
    transition: all .3s ease-out;
    padding: 0 0.3125rem
`