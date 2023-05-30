import { atom } from "recoil";
import { IPost } from "../../domain/post";

export const PostsAtom = atom<IPost[]>({
    key: 'posts',
    default: []
})