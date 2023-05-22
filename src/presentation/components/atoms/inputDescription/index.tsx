import { useRecoilState } from 'recoil'
import * as S from './styled'
import { PostDescriptionAtom } from '../../../context/newPost'

export default function InputDescription(){

    const [description, setDescription] = useRecoilState(PostDescriptionAtom)

    return <S.Input 
            placeholder='Adicionar descrição...' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            maxLength={250}
            />
}