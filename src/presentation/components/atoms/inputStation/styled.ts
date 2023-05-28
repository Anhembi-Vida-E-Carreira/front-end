import styled from "styled-components";



export const StandartSelect = styled.select`
    min-width: 21.5rem;
    max-width: fit-content;
    height: 3.4rem;
    border: 0.1rem solid black;
    border-radius: 0.8rem;  
    outline: none;
    font-size: 1.2rem;
    padding-inline: 1rem;
    background-color: transparent;
    overflow: hidden;

    :focus {
        outline: none;
    }
`

export const SelectOptions = styled.option`
    height: 5.4rem;
    border: 0.1rem solid black;
    border-radius: 2.9rem;  
    outline: none;
    font-size: 2rem;
    padding-inline: 2rem;

    :hover {
        box-shadow: 0 1rem 3.8rem -1rem rgba(22, 23, 24, 0.35), 0 1rem 2rem -1.5rem rgba(22, 23, 24, 0.2);
    }
`

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 31rem;
    
`