import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './styled'
import { ImageToRemove, PostImagesAtom } from '../../../context/newPost'

export default function CreatePostImagesShower(){

    const [images, setImages] = useRecoilState(PostImagesAtom)
    const setFileToRemove = useSetRecoilState(ImageToRemove)
    

    const handleRemoval = (index: number) => {
        setFileToRemove(index); 
        const newImages = [...images]
        newImages.splice(index, 1)
        setImages(newImages)
    }


    return (
        <S.Container>
            {images.length && images.map((image, index) => {
                return (
                    <S.ImageContainer key={index} onClick={() => handleRemoval(index)}>
                      <S.RemoveIcon/>
                      <S.Image src={image} key={index}/>  
                    </S.ImageContainer>
                )
            })}
        </S.Container>
    )
}