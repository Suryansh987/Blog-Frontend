import React from 'react'

const Drawer = (props) => {
  const { menu } = props
  return (
    <>
      <div className={`bg-body-color w-screen absolute top-30 bg-clip-padding backdrop-filter backdrop-blur-[8px] bg-opacity-10 sm:hidden ${menu==="Menu"?"hidden":"block"} `}>
        <ul className='text-center my-2 font-Marmelad'>
            <li className='my-4 font-semibold text-xl'>Home</li>
            <li className='my-4 font-semibold text-xl'>My Blogs</li>
            <li className='my-4 font-semibold text-xl'>About</li>
            <li className='my-4 font-semibold mb-6 text-xl'>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Drawer
