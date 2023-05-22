import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: end;
`

export const CharacterCounter = styled.p<{color: string}>`
    font-size: 1.2rem;
    color: ${props => props.color}
`