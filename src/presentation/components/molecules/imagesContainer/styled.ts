import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 31rem;
`
export const Image = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 0.8rem;
    object-fit: cover;
`
export const ImageContainer = styled.button`
    border: none;
    width: 15rem;
    height: 15rem;
    background-color: transparent;
    display: flex;
    align-items: right;
    justify-content: flex-end;
    border-radius: 0.8rem;
    cursor: pointer;

`

export const RemoveIcon = styled.img`
    z-index: 3;
    position: fixed;
    width: 3.5rem;
    content: url('/removeImage.svg');
    
`