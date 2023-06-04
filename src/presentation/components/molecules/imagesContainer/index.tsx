import * as S from './styled'

export default function PostImagesShower({ propsImages } : {propsImages: string[]}){


    return (
        <S.Container>
            {propsImages.map((image, index) => {
                return (
                    <S.ImageContainer key={index}> 
                      <S.Image src={image} key={index}/>  
                    </S.ImageContainer>
                )
            })}
        </S.Container>
    )
}