import React from 'react'
import { Link } from 'react-router-dom'


const Drawer = (props) => {
  const { menu } = props
  return (
    <>
      <div className={`bg-body-color w-screen absolute top-30 bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-10 sm:hidden ${menu==="Menu"?"hidden":"block"} `}>
        <ul className='text-center my-2 font-Marmelad'>
            <Link to="/" className='my-4 font-semibold text-xl block hover:text-text-color'>Home</Link>
            <Link to="/blog" className='my-4 font-semibold text-xl block hover:text-text-color'>My Blogs</Link>
            <Link to="/" className='my-4 font-semibold text-xl block hover:text-text-color'>About</Link>
            <Link to="/" className='my-4 font-semibold mb-6 text-xl block hover:text-text-color'>Contact</Link>
        </ul>
      </div>
    </>
  )
}

export default Drawer
