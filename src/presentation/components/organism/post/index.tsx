import { IPost } from "../../../../domain/post";
import Card from "../../atoms/card";
import ReportInfo from "../../molecules/reportInfo";


export default function Post(post: IPost){

    return (
        <Card>
            <ReportInfo {...post}/>
        </Card>
    )
}