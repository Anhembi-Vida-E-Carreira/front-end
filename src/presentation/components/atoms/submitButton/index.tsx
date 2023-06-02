import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './styled'
import { Post } from '../../../context/newPost'
import createReport from '../../../../infra/gateways/createReport'
import { Navigate} from 'react-router-dom'
import { PostsAtom } from '../../../context/posts'
import { IPost } from '../../../../domain/post'

export default function ButtonSubmit(){

    const post = useRecoilValue(Post)
    const setPosts = useSetRecoilState(PostsAtom)

    const submit = async () => {
        const error = await createReport(post)
        const newPost : IPost = {
            ...post,
            rating: 0,
            postDate: '02/06/2023',
            id: 1
        } 

        setPosts(old => [...old, newPost])

        if (!error){
           return <Navigate to={'/'}/>
        }
    }

    return <S.Button onClick={async () => {await submit()}}>Enviar</S.Button>
}