import { useRecoilValue } from 'recoil'
import * as S from './styled'
import { PostDescriptionAtom } from '../../../context/newPost'
import { useEffect, useState } from 'react'
import InputDescription from '../../atoms/inputDescription'

export default function DescriptionCounter(){
    const description = useRecoilValue(PostDescriptionAtom)
    const [textColor, setTextColor] = useState<string>('black')

    const checkDescription = () => {
        if (description.length <= 200) setTextColor('black')
        if (description.length > 200) setTextColor('#FA3C13')
        if (description.length > 225) setTextColor('#FA1313')
        if (description.length === 250) setTextColor('#E40000')
    }

    useEffect(() => {
        checkDescription()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [description])

    return (
        <S.Wrapper>
            <InputDescription/>
            <S.CharacterCounter color={textColor}>{description.length}/250 caractéres</S.CharacterCounter>
        </S.Wrapper>
    )
}