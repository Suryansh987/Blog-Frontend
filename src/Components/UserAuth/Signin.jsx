import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <div className='w-[80vw] m-auto mt-6 border-2 border-text-color p-6'>
      <form method='POST' onSubmit={(e)=>(e.preventDefault())}>
        <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="username" id="username" placeholder='Enter your Name...'/>
        <br />
        <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="email" id="email" placeholder='Enter Your Email...'/>
        <br />
        <input className='my-3 w-full py-3 px-3 rounded-xl outline-orange-300' type="text" name="password" id="password" placeholder='Enter your Password...'/>
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