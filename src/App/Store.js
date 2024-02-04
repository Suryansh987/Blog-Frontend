import { configureStore } from '@reduxjs/toolkit'
import AuthSlicer from './AuthSlicer'

export const store = configureStore({
    reducer : {
        auth : AuthSlicer
    }
})


