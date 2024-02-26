import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged: false,
    user: {}
};
    



const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers:
    {
        login: (state,action)=>{
            state.logged = true,
            state.user = action.payload
        },
        logout: (state, action) => {
            state.logged = false
        },
    },
})

export const { login, signin, logout } = AuthSlicer.actions
export default AuthSlicer.reducer
