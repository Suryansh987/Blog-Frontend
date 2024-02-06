import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged : false
}

const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login : (state, action) => {
            state.logged = true
        },
        signin : (state,action) => {
            state.logged = true
        },
        logout : (state,action) => {
            state.logged = false
        }
    }
})

export const { login , signin, logout } = AuthSlicer.actions

export default AuthSlicer.reducer