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



const userLogin = createAsyncThunk('auth/login', async (formdata) => {
    const data = new URLSearchParams();
    for (const key in formdata) {
        data.append(key, formdata[key])
    }

    const user = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
        credentials: 'include',
    })
    const userjson = await user.json()
    return userjson
})

const userSignin = createAsyncThunk('auth/sigin',async(userData)=>{
    const data = new URLSearchParams();
    for(const key in userData){
        data.append(key,userData[key])
    }

    const user = await fetch(`${url}/user/signin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
        credentials: 'include',
    })
    const userjson = await user.json()
    return userjson
})



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
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            const { user, error } = action.payload
            if(user){
                state.logged = true
                state.user=user
            }
            else if(error){
                console.error(error);
            }
        }),
        builder.addCase(userSignin.fulfilled, (state,action)=>{
            const { user, error } = action.payload
            if(user){
                state.logged = true
                state.user=user
            }
            else if(error){
                console.error(error);
            }
        })
    }
})

export const { login, signin, logout } = AuthSlicer.actions
export default AuthSlicer.reducer

