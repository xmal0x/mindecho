import {configureStore} from "@reduxjs/toolkit";
import postsReducer from '../slices/postsSlice'
import pageReducer from '../slices/pageSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        page: pageReducer
    }
})

export default store
