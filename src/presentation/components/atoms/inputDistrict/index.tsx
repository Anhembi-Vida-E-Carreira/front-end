import { useRecoilState } from 'recoil'
import * as S from './styled'
import { PostDistrictAtom } from '../../../context/newPost'

export default function InputDistrict(){

    const [district, setDistrict] = useRecoilState(PostDistrictAtom)

    return <S.Input type='text' value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Bairro em que ocorreu'/>
}