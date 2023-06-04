import updateRating from '../../../../infra/gateways/updateRating'
import * as S from './styled'

export default function UpvoteButton({rating, description}: {rating: number, description: string}){

    const upvote = async () => {
        await updateRating(description)
    }

    return (
        <S.Container>
            <S.RatingNumber>{rating} {rating > 1 ? 'pessoas acharam' : 'pessoa achou'} isso útil</S.RatingNumber>
            <S.Upvote onClick={async () => {upvote()}}/>
        </S.Container>
    )
}