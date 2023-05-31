import { useRecoilState, useSetRecoilState } from 'recoil'
import NewPostButton from '../../components/atoms/newPostButton'
import Header from '../../components/molecules/header'
import * as S from './styled'
import { PostsAtom } from '../../context/posts'
import { useEffect } from 'react'
import getReports from '../../../infra/gateways/getReports'
import Post from '../../components/organism/post'
import { PostImagesAtom } from '../../context/newPost'

export default function LandingPage(){
    const [posts, setPosts] = useRecoilState(PostsAtom)
    const setImages = useSetRecoilState(PostImagesAtom)

    const getPosts = async () => {
        const posts = await getReports()
        setPosts(posts)
    }

    useEffect(() => {
        setImages([])
        getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    return (
        <S.Container>
            <S.Wrapper>
                <Header/>
                <S.PostsDiv>
                  {posts.map(post => {
                    return (
                        <Post {...post}/>
                    )
                })}  
                </S.PostsDiv>
                
            </S.Wrapper>
            <NewPostButton/>
        </S.Container>
    )
}