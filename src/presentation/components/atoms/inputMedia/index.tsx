import * as S from './styled'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ImageToRemove, PostImagesAtom } from '../../../context/newPost';
import { useEffect, useRef } from 'react';

export default function InputMedia(){

    const setImages = useSetRecoilState(PostImagesAtom)
    const inputRef = useRef<HTMLInputElement>(null)
    const imageToRemove = useRecoilValue(ImageToRemove)

    useEffect(() => {
       if (imageToRemove !== 88 && inputRef.current?.files?.length){
        const files =  Array.from(inputRef.current?.files)
        files.splice(imageToRemove, 1)
        const updatedFileList = new DataTransfer()
        files.forEach(file => {
            updatedFileList.items.add(file)
        });
        inputRef.current.files = updatedFileList.files
       }
    },[imageToRemove])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files?.length) {
        const reader = new FileReader();

        for (const file of files){
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result) {
                  const newImage = event.target.result.toString()

                  setImages(old => [...old, newImage])
                }
              };
        
            reader.readAsDataURL(file);
        }     
      }
    };

    return (
        <S.Container>
            <S.InputContainer>
                <S.Input ref={inputRef} type='file' accept='image/*' onChange={handleImageChange}/>
            </S.InputContainer>
            <S.Text>Adicionar fotos</S.Text>
        </S.Container>
    )
}