import { IPost } from "../../domain/post"

export default async function getReports(): Promise<IPost[]>{
    const posts : IPost[] = [
        {
            title: "Maníaco no metrô",
            station: "Penha",
            city: "São Paulo",
            district: "Penha",
            postDate: "21/05/2023",
            description: "Não se aproximem desse homem. Esse indivíduo acabou de cometer sérios atos",
            rating: 2003,
            images: []
        },
        {
            title: "Maníaco no metrô",
            station: "Penha",
            city: "São Paulo",
            district: "Penha",
            postDate: "21/05/2023",
            description: "Não se aproximem desse homem. Esse indivíduo acabou de cometer sérios atos",
            rating: 2003,
            images: []
        },
        {
            title: "Maníaco no metrô",
            station: "Penha",
            city: "São Paulo",
            district: "Penha",
            postDate: "21/05/2023",
            description: "Não se aproximem desse homem. Esse indivíduo acabou de cometer sérios atos",
            rating: 2003,
            images: []
        }
    ] 

    return posts
}