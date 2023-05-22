import NewPostButton from '../../components/atoms/newPostButton'
import Header from '../../components/molecules/header'
import * as S from './styled'

export default function LandingPage(){
    return (
        <S.Container>
            <S.Wrapper>
                <Header/>
            </S.Wrapper>
            <NewPostButton/>
        </S.Container>
    )
}