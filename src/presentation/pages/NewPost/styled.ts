import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5rem;
    gap: 3rem;
`

export const ErrorLog = styled.div`
    position: fixed;
    margin-inline: auto;
    margin-block: auto;
    z-index: 3;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background-color: #FFEBEB;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
`

export const ErrorMessage = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: red;
`

export const Close = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    color: black;
`