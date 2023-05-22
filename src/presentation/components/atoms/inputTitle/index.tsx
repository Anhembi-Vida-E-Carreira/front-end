import { useRecoilState } from 'recoil'
import * as S from './styled'
import { PostTitleAtom } from '../../../context/newPost'

export default function InputTitle(){

    const [postTitle, setPostTitle] = useRecoilState(PostTitleAtom)

    return <S.Input type='text' value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
}