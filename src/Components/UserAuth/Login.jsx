import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../App/AuthSlicer'
import { useForm } from 'react-hook-form'
const url = import.meta.env.VITE_EXPRESS_URL



const Login = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async (formdata) => {
    dispatch(userLogin(formdata))
  }
  return (
    <>
      <div className='w-[80vw] m-auto mt-6 border-2 border-text-color p-6'>
        <p className='sm:text-3xl text-xl text-text-color font-Marmelad text-center'>Please Enter your Credentials</p>
        <form method="post" onSubmit={handleSubmit(handleLogin)}>
          <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="email" id="email" placeholder='Enter your Email here...' {...register("email")} />
          <br />
          <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="password" id="password" placeholder='Enter your password....' {...register("password")} />
          <br />
          <button className='my-3 py-3 rounded-xl w-full bg-text-color text-body-color shadow-md hover:shadow-orange-300' type="submit" >Login</button>
        </form>
        <div className='text-lg text-center mt-5'>Don't have an account? Want to {" "}
          <Link className='text-blue-600 font-semibold hover:underline underline-offset-4' to='/signin'>Signin</Link>
        </div>
      </div>
    </>
  )
}

export default Login