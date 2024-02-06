import { configureStore } from '@reduxjs/toolkit'
import AuthSlicer from './AuthSlicer'
import BlogSlicer from './BlogSlicer'

export const store = configureStore({
    reducer : {
        auth : AuthSlicer,
        blog : BlogSlicer
    }
})


