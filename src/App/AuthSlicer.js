import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged : false
}

const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login : (state, action) => {
            logged = true
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

export default AuthSlicer.reducer