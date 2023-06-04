import { IPost } from "../../domain/post"
import AxiosHTTPClient from "../http/axios"

export default async function getReports() {
    const client = new AxiosHTTPClient()
    try {
       const posts = await client.get<IPost[]>('/report')      
       return posts
    } catch (err){
       console.log(err)
    }
}