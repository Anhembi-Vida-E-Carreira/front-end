import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`
export const Filter = styled.p`
    font-size: 1rem;
    color: #0F3BD6;
`

export const Time = styled.p`
    font-size: 1.2rem;
    color: #8C8C8C;
`

export const Description = styled.p`
   font-size: 1.2rem;
   color: black;
`
export const SeeMore = styled.button`
    border: none;
    background-color: transparent;
    color: #5A5A5A;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
    content: url('/anonymousIcon.svg');
`

export const Container = styled.div`
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`

export const TopDiv = styled.div`
    width: 30rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
`

export const FiltersDiv = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const MidDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 30rem;
`