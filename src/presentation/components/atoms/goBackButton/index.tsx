import { useSetRecoilState } from 'recoil'
import * as S from './styled'
import { PostCityAtom, PostDescriptionAtom, PostDistrictAtom, PostImagesAtom, PostStationAtom, PostTitleAtom } from '../../../context/newPost'

export default function GoBackButton(){
    const setTitle = useSetRecoilState(PostTitleAtom)
    const setDescription = useSetRecoilState(PostDescriptionAtom)
    const setCity = useSetRecoilState(PostCityAtom)
    const setDistrict = useSetRecoilState(PostDistrictAtom)
    const setStation = useSetRecoilState(PostStationAtom)
    const setImages = useSetRecoilState(PostImagesAtom)

    const reset = () => {
        setTitle('')
        setDescription('')
        setCity('')
        setDistrict('')
        setStation('')
        setImages([])
    }


    return (
        <S.Button onClick={reset} to={'/'}/>
    )
}