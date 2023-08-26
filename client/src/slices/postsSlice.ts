import {PostState, RootState} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {createPost, deletePost, getPosts, likePost} from "./thunks";

const initialState: PostState = {
    posts: [],
    loadingStatus: "completed",
} as PostState

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loadingStatus = 'completed'
            })
            .addCase(getPosts.pending, (state) => {
                state.loadingStatus = 'loading'
            })
            .addCase(getPosts.rejected, state => {
                state.loadingStatus = 'failed'
            })
        builder
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.unshift(action.payload)
            })
        builder
            .addCase(likePost.fulfilled, (state, action) => {
                state.posts = state.posts.map(post => post._id === action.payload._id ? action.payload : post)
            })
        builder
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post._id !== action.payload)
            })
    }
})

export const selectPosts = (state: RootState) => state.posts.posts
export const selectLoadingStatus = (state: RootState) => state.posts.loadingStatus

export default postsSlice.reducer
