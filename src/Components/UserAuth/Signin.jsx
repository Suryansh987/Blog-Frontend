import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../App/AuthSlicer'


const Signin = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const selector = useSelector(state=>state.auth.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
    dispatch(signin(user))
  }
  return (
    <>
    <div className='w-[80vw] m-auto mt-6 border-2 border-text-color p-6'>
      <form method='POST' onSubmit={handleSubmit}>
        <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="name" id="name" placeholder='Enter your Name...' value={user.name} onChange={handleOnChange}/>
        <br />
        <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="email" id="email" placeholder='Enter Your Email...' value={user.email} onChange={handleOnChange}/>
        <br />
        <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="password" id="password" placeholder='Enter your Password...' value={user.password} onChange={handleOnChange}/>
        <br />
        <button className='my-3 py-3 rounded-xl w-full bg-text-color text-body-color shadow-md hover:shadow-orange-300' type="submit">Signin  </button>
      </form>
      <div className='text-lg text-center mt-5'>Already have an account? Want to {" "} 
        <Link className='text-blue-600 font-semibold hover:underline underline-offset-4' to='/login'>Login</Link>
         </div>
    </div>
    </>
  )
}

export default Signin