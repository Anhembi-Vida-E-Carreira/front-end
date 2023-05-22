import axios from "axios";
import { HTTPClient } from "./http";

export default class AxiosHTTPClient implements HTTPClient{
    constructor(
        private readonly apiURL: string
    ){}

    async get<T>(urlParams?: string): Promise<T | undefined> {
        try {
          const {data} = await axios.get(`${this.apiURL}${urlParams}`)  
          return data
        } catch (err) {
          console.log(err)
        }
    }

    async post<T>(content: T, urlParams?: string | undefined): Promise<void> {
        try {
            await axios.post(`${this.apiURL}${urlParams}`, {
                ...content
            })
        } catch (err) {
            console.log(err)
        }
    }

    async put<T>(content: T, urlParams?: string | undefined): Promise<void> {
        try {
            await axios.put(`${this.apiURL}${urlParams}`, {
                ...content
            })
        } catch (err) {
            console.log(err)
        }
    }

    async delete(urlParams: string): Promise<void> {
        try {
            await axios.delete(`${this.apiURL}${urlParams}`)
        } catch (err) {
            console.log(err)
        }
    }
}