import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Blogs : {}
}

const BlogSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        fetch : (state, action) => {
            
        },
        signin : (state,action) => {
            logged = true
        },
        logout : (state,action) => {
            logged = false
        }
    }
})

export const { login , signin, logout } = AuthSlicer.actions

export default BlogSlicer.reducer