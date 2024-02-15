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

const url = process.env.REACT_APP_EXPRESS_APP

const AuthSlicer = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login : (state, action) => {
            const data = action.payload
            fetch(`${url}/user/signin`, {
                method: "POST", 
                headers: {
                //   "Content-Type": "application/json",
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
              })
              .then(res => state.user=res.JSON())
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