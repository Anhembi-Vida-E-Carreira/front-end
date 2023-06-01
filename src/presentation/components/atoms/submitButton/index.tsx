import { useRecoilValue } from 'recoil'
import * as S from './styled'
import { Post } from '../../../context/newPost'
import createReport from '../../../../infra/gateways/createReport'

export default function ButtonSubmit(){

    const post = useRecoilValue(Post)

    const submit = async () => {
        await createReport(post)
    }

    return <S.Button onClick={async () => {await submit()}}>Enviar</S.Button>
}