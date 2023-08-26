import {createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";
import {Post} from "../types";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        try {
            const {data} = await api.getPosts()
            console.log(data)
            return data
        } catch (e) {
            console.error(e)
        }
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (post: Post) => {
        try {
            const {data} = await api.createPost(post)
            return data
        } catch (e) {
            console.error(e)
        }
    }
)

export const likePost = createAsyncThunk(
    'posts/likePost',
    async (id: string) => {
        try {
            const {data} = await api.likePost(id)
            return data
        } catch (e) {
            console.error(e)
        }
    }
)

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (id: string) => {
        try {
            await api.deletePost(id)
            return id
        } catch (e) {
            console.error(e)
        }
    }
)
