import * as S from './styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card({children}: {children: any}){

    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}