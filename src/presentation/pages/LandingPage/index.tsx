import { useRecoilState } from 'recoil'
import NewPostButton from '../../components/atoms/newPostButton'
import Header from '../../components/molecules/header'
import * as S from './styled'
import { PostsAtom } from '../../context/posts'
import { useEffect } from 'react'
import getReports from '../../../infra/gateways/getReports'
import Post from '../../components/organism/post'

export default function LandingPage(){
    const [posts, setPosts] = useRecoilState(PostsAtom)

    const getPosts = async () => {
        const posts = await getReports()
        setPosts(posts)
    }

    useEffect(() => {
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