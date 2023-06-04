import styled from "styled-components";

export const Input = styled.textarea`
     background-color: rgba(132, 151, 221, 0.87);
    width: 28rem;
    height: 10.8rem;
    padding: 1.5rem;
    border: none;
    font-family: 'Poppins';
    outline: none;
    text-align: start;
    border-radius: 0.8rem;
    resize: none;
    
    ::placeholder {
        text-decoration: underline;
        color: black;
        font-family: 'Poppins';
    }
`