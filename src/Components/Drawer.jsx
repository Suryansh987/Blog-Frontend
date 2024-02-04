import React from 'react'

const Drawer = () => {
  return (
    <>
      <div className='bg-slate-50 h-screen w-[20vw] absolute top-0 hidden'>
        <ul>
            <li>Home</li>
            <li>My Blogs</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Drawer
