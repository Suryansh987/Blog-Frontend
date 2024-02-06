import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Blogs : {}
}

const BlogSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        fetch : (state, action) => {
            state.Blogs = {"fetch":"fetched"}
        },
        create : (state,action) => {
            state.Blogs = {"Create":"Created"}
        },
        remove : (state,action) => {
            state.Blogs = {"remove":"removed"}
        }
    }
})

export const { fetch , create , remove } = BlogSlicer.actions

export default BlogSlicer.reducer