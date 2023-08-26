import store from "../store/configureStore";

export type AsyncStatus = 'completed' | 'loading' | 'failed'

export interface Post {
    _id?: string,
    message: string,
    creator: string,
    tags: string[],
    liked: boolean
    createdAt: string
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export interface PostState {
    posts: Post[],
    loadingStatus: AsyncStatus
}

export interface PageState {
    title: string
}
