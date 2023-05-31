import updateRating from '../../../../infra/gateways/updateRating'
import * as S from './styled'

export default function UpvoteButton({rating, id}: {rating: number, id: number}){

    const upvote = async () => {
        await updateRating(id)
    }

    return (
        <S.Container>
            <S.RatingNumber>{rating} {rating > 1 ? 'pessoas acharam' : 'pessoa achou'} isso útil</S.RatingNumber>
            <S.Upvote onClick={async () => {upvote()}}/>
        </S.Container>
    )
}