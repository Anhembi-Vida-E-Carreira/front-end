import AxiosHTTPClient from "../http/axios"

export default async function updateRating(description: string){
    const client = new AxiosHTTPClient()
    try {
       await client.put<string>(description, '/report')    
    } catch (err: any){
       return err.message
    }
}