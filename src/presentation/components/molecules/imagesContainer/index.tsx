import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './styled'
import { ImageToRemove, PostImagesAtom } from '../../../context/newPost'

export default function ImagesShower({ propsImages } : {propsImages?: string[]}){

    const [images, setImages] = useRecoilState(PostImagesAtom)
    const setFileToRemove = useSetRecoilState(ImageToRemove)
    

    const handleRemoval = (index: number) => {
        setFileToRemove(index); 
        const newImages = [...images]
        newImages.splice(index, 1)
        setImages(newImages)
    }

    // const presentImage = (index: number) => {

    // }

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
            {
             propsImages?.length && propsImages.map((image, index) => {
                return (
                    <S.ImageContainer key={index}> 
                      <S.Image src={image} key={index}/>  
                    </S.ImageContainer>
                )
            })}
        </S.Container>
    )
}