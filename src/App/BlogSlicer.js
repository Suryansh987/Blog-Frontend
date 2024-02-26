import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const url = import.meta.env.VITE_EXPRESS_URL

const initialState = {
    Blogs : []
      
}

export const fetchBlogs = createAsyncThunk('fetchData', async()=>{
  const res = await fetch(`${url}/blog/userblogs`,{credentials:'include'})
  const blogs = await res.json()
  return blogs
})

const BlogSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        // fetch : (state, action) => {
        //     state.Blogs.push(action.payload)
        // },
        create : (state,action) => {
            state.Blogs.push(action.payload)
        },
        remove : (state,action) => {
            state.Blogs.push(action.payload)
        }
    },
    extraReducers: (builder) =>{
      builder.addCase(fetchBlogs.fulfilled, (state, action) => {
        const {blogs, error} = action.payload
        if(blogs){
          state.Blogs = blogs
        }
        else if(error){
          console.error(error);
        }
      })
    }
})

export const { create , remove } = BlogSlicer.actions

export default BlogSlicer.reducer