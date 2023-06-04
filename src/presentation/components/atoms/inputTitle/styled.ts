import styled from "styled-components";

export const Input = styled.input`
    border: none;
    outline: none;
    width: 23rem;
    background-color: transparent;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    
    ::placeholder {
        color: black;
        text-decoration: underline;
    }
`