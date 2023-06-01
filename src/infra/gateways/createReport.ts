import { IPost } from "../../domain/post"
import AxiosHTTPClient from "../http/axios"

export default async function createReport(report: Omit<IPost, 'rating' | 'postDate' | 'id'>) {
    const client = new AxiosHTTPClient()
    try {
       await client.post<Omit<IPost, 'rating' | 'postDate' | 'id'>>(report, '/report')    
    } catch (err){
       console.log(err)
    }
}