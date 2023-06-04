import { useRecoilState, useSetRecoilState } from 'recoil'
import NewPostButton from '../../components/atoms/newPostButton'
import Header from '../../components/molecules/header'
import * as S from './styled'
import { PostsAtom } from '../../context/posts'
import { useLayoutEffect } from 'react'
import getReports from '../../../infra/gateways/getReports'
import Post from '../../components/organism/post'
import { PostImagesAtom } from '../../context/newPost'

export default function LandingPage(){
    const [posts, setPosts] = useRecoilState(PostsAtom)
    const setImages = useSetRecoilState(PostImagesAtom)

    const getPosts = async () => {
        const posts = await getReports()
        setPosts(posts!)
    }

    useLayoutEffect(() => {
        setImages([])
        getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    return (
        <S.Container>
            <S.Wrapper>
                <Header/>
                <S.PostsDiv>
                  {posts.length ? posts.map(post => {
                    return (
                        <Post {...post}/>
                    )
                }) : <S.Message>Não há nenhuma denúncia</S.Message>}  
                </S.PostsDiv>
                
            </S.Wrapper>
            <NewPostButton/>
        </S.Container>
    )
}