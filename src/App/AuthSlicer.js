import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
const url = import.meta.env.VITE_EXPRESS_URL
const initialState = {
    logged: false,
    user: {
        name: "",
        email: "",
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
    if (!user.ok) {
        console.log("error");
    }
    const userjson = await user.json()
    return userjson
})



const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers:
    {

        signin: (state, action) => {
            state.logged = true
            state.user.name = action.payload.name,
                state.user.email = action.payload.email,
                state.user.password = action.payload.password
        },
        logout: (state, action) => {
            state.logged = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            const { user, error } = action.payload
            if(user){
                state.user=user
            }
            else if(error){
                console.error(error);
            }
        })
    }
})

export const { login, signin, logout } = AuthSlicer.actions
export { userLogin }
export default AuthSlicer.reducer

