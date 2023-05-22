import { atom } from "recoil";

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