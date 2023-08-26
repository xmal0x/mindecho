import axios from "axios";
import {Post} from "../types";

const url = 'http://localhost:4000'
const postUrl = `${url}/posts`

export const getPosts = () => axios.get(postUrl)
export const createPost = (post: Post) => axios.post(postUrl, post)
export const likePost = (id: string) => axios.patch(`${postUrl}/${id}/likePost`)
export const deletePost = (id: string) => axios.delete(`${postUrl}/${id}`)
