import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
const url = import.meta.env.VITE_EXPRESS_URL
const initialState = {
    logged: false,
    user: {
        name: "Suryansh",
        email: "abc@gmail.com",
        password: "",
        avatar: "",
        cover: ""
    }
};



const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers:
    {
        login: (state,action)=>{
            const { user, error } = action.payload
            if(user){
                state.logged = true
                state.user=user
            }
            else if(error){
                console.error(error);
            }
        },
        signin: (state,action)=>{
            const { user, error } = action.payload
            if(user){
                state.logged = true
                state.user=user
            }
            else if(error){
                console.error(error);
            }
        },
        logout: (state, action) => {
            state.logged = false
        },
    },
})

export const { login, signin, logout } = AuthSlicer.actions
export default AuthSlicer.reducer

