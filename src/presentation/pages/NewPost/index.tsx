import Header from '../../components/molecules/header'
import PostCreator from '../../components/organism/postCreator'
import * as S from './styled'

export default function NewPost(){
    return (
        <S.Container>
            <S.Wrapper>
                <Header/>
                <PostCreator/>
            </S.Wrapper>
        </S.Container>
    )
}