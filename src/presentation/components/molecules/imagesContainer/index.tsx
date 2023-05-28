import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './styled'
import { ImageToRemove, PostImagesAtom } from '../../../context/newPost'
import { useState } from 'react'

export default function ImagesShower(){

    const [images, setImages] = useRecoilState(PostImagesAtom)
    const setFileToRemove = useSetRecoilState(ImageToRemove)
    const [remove, setRemove] = useState<boolean>(false)

    const handleRemoval = (index: number) => {
        setFileToRemove(index); 
        const newImages = [...images]
        newImages.splice(index, 1)
        setImages(newImages)
    }

    return (
        <S.Container>
            {images.map((image, index) => {
                return (
                    <S.ImageContainer key={index} onMouseEnter={() => setRemove(!remove)} onClick={() => handleRemoval(index)}>
                      <S.RemoveIcon/>
                      <S.Image remove={remove} src={image} key={index}/>  
                    </S.ImageContainer>
                )
            })}
        </S.Container>
    )
}