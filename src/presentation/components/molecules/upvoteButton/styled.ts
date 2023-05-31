import styled from 'styled-components'

export const RatingNumber = styled.p`
    font-size: 1rem;
    text-decoration: underline;
`
export const Upvote = styled.button`
    background-color: transparent;
    border: none;
    background-image: url('/upvote.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 2.4rem;
    height: 2.4rem;
`

export const Container = styled.div`
    display: flex;
    width: 30rem;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
`