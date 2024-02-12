import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged : false,
    user : {
        name:"",
        email:"",
        password:"",
        avatar:"",
        cover:""
}
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
            state.user.name = action.payload.name,
            state.user.email = action.payload.email,
            state.user.password = action.payload.password
        },
        logout : (state,action) => {
            state.logged = false
        }
    }
})

export const { login , signin, logout } = AuthSlicer.actions

export default AuthSlicer.reducer