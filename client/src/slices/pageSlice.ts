import {PageState, RootState} from "../types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: PageState = {
    title: ''
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.title = action.payload
        }
    }
})

export const {setPage} = pageSlice.actions

export const selectPage = (state: RootState) => state.page.title

export default pageSlice.reducer
