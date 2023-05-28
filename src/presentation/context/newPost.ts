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