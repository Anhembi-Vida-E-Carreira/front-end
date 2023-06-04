import { useRecoilValue } from 'recoil'
import Header from '../../components/molecules/header'
import PostCreator from '../../components/organism/postCreator'
import * as S from './styled'
import { Error } from '../../context/newPost'
import { useEffect, useState } from 'react'
import GoBackButton from '../../components/atoms/goBackButton'

export default function NewPost(){

    const error = useRecoilValue(Error)
    const [show, setShow] = useState<boolean>(false)
    
    useEffect(() => {
       if (error) setShow(true)
    },[error])

    return (
        <S.Container>
            <S.Wrapper>
                <Header/>
                {show && <S.ErrorLog>
                        <S.ErrorMessage>{error}</S.ErrorMessage>
                        <S.Close onClick={() => setShow(false)}>X</S.Close>
                        </S.ErrorLog>}
                <PostCreator/>
                <GoBackButton/>
            </S.Wrapper>
        </S.Container>
    )
}