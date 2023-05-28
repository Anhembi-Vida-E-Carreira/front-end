import { atom, selector } from "recoil";
import { IPost } from "../../domain/post";

export const PostTitleAtom = atom<string>({
    key: 'postTitle',
    default: 'Nova Denúncia'
})

export const PostDescriptionAtom = atom<string>({
    key: 'postDescription',
    default: ''
})

export const PostCityAtom = atom<string>({
    'key': 'postCity',
    default: ''
})

export const PostDistrictAtom = atom<string>({
    'key': 'postDistrict',
    default: ''
})

export const PostStationAtom = atom<string>({
    'key': 'postStation',
    default: ''
})

export const PostImagesAtom = atom<string[]>({
    key: 'postImages',
    default: []
})

export const ImageToRemove = atom<number>({
    key: 'removeImage',
    default: 88
})

export const Post = selector<Omit<IPost, 'rating' | 'postDate'>>({
    key: 'post',
    get: ({get}) => {
        const title = get(PostTitleAtom)
        const description = get(PostDescriptionAtom)
        const city = get(PostCityAtom)
        const district = get(PostDistrictAtom)
        const station = get(PostStationAtom)
        const images = get(PostImagesAtom)

        return {
            title,
            description,
            city,
            district,
            station,
            images
        }
    }
})