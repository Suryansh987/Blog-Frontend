import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const url = import.meta.env.VITE_EXPRESS_URL
const initialState = {
    logged : false,
    user : {
        name:"",
        email:"",
        password:"",
        avatar:"",
        cover:""
}
};


const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login : async(state, action) => {
            const formdata = action.payload
            const data = new URLSearchParams();
            for(const key in formdata){
                data.append(key,formdata[key])
            }

            const user = await fetch(`${url}/user/login`, {
                method: "POST", 
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data,
                credentials: 'include'
              })
              const userjson = await user.json()
              console.log(userjson.sucess);

            const cookies = user.headers;
              console.log(cookies);
            }
                      
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
    })

export const { login , signin, logout } = AuthSlicer.actions

export default AuthSlicer.reducer

