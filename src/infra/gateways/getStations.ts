import { IFilter } from "../../domain/filter"
import AxiosHTTPClient from "../http/axios"

export default async function getStations(){
    const client = new AxiosHTTPClient()
    try {
       const posts = await client.get<IFilter[]>('/filters')      
       return posts.map((post) => post.name)
    } catch (err){
       console.log(err)
    }
}