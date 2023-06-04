import { IPost } from "../../../../domain/post";
import * as S from './styled'


export default function ReportInfo(reportInfo: Omit<IPost, 'id' | 'images' | 'rating'>){

    return (
        <S.Container>
            <S.TopDiv>
                <S.Icon/>
                <S.Title>{reportInfo.title}</S.Title>
            </S.TopDiv>
            <S.MidDiv>
                <S.FiltersDiv>
                    <S.Filter>{reportInfo.station}</S.Filter>
                    <S.Filter>{reportInfo.district}</S.Filter>
                    <S.Filter>{reportInfo.city}</S.Filter>
                </S.FiltersDiv>
                <S.Time>{reportInfo.postDate}</S.Time>
            </S.MidDiv>
            <S.Description>{reportInfo.description}</S.Description>
        </S.Container>
    )

}