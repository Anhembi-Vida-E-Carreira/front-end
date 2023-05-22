import { useRecoilState } from 'recoil'
import * as S from './styled'
import { PostCityAtom } from '../../../context/newPost'

export default function InputCity(){

    const [city, setCity] = useRecoilState(PostCityAtom)

    return <S.Input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='Cidade em que ocorreu'/>
}