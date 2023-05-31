import { IPost } from "../../../../domain/post";
import Card from "../../atoms/card";
import ImagesShower from "../../molecules/imagesContainer";
import ReportInfo from "../../molecules/reportInfo";
import UpvoteButton from "../../molecules/upvoteButton";


export default function Post(post: IPost){

    return (
        <Card>
            <ReportInfo {...post}/>
            <ImagesShower propsImages={post.images}/>
            <UpvoteButton rating={post.rating} id={post.id}/>
        </Card>
    )
}