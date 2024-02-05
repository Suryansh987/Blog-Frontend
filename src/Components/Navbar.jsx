import React, { useState } from 'react'
import '../index.css'

const Navbar = (props) => {
  const [MenuType, setMenuType] = useState("Menu")
  const { Avatar } = props
  return (
    <>
      <div className='flex  sm:text-3xl text-xl justify-center items-center'>
        <svg className='sm:h-[65px] h-[45px] sm:w-[85px] w-[50px] sm:mt-0 mt-5' viewBox="50 50 200 200" xmlns="http://www.w3.org/2000/svg">
          <g className='sm:scale-[1.7] scale-125' >
          <path  fill="#24582A" d="M32.1,-44.7C44.5,-48.4,59.5,-45.7,62.7,-37.2C65.9,-28.7,57.4,-14.3,58.3,0.5C59.2,15.4,69.5,30.8,61.9,31.6C54.3,32.4,28.6,18.7,15.3,16.7C1.9,14.6,1,24.2,-1.3,26.4C-3.5,28.6,-7,23.4,-14.1,21.9C-21.2,20.3,-32,22.5,-45.5,19.5C-58.9,16.4,-75.1,8.2,-75.7,-0.3C-76.2,-8.8,-61,-17.6,-49.4,-23.9C-37.8,-30.2,-29.8,-33.9,-22.1,-32.9C-14.5,-31.9,-7.2,-26.2,1.3,-28.4C9.8,-30.7,19.7,-40.9,32.1,-44.7Z" transform="translate(100 100)" />
          <image className='invert' href="/Blog_Icon.png" x="40%" y="28%" height="60" width="60"/>
          </g>
        </svg>
        <span className='hue-rotate-90'></span>
        <span className='font-[Sixtyfour] mt-2 text-[#24582a]'>TechyBlogs</span></div>
      <nav className='flex w-screen h-[55px] justify-between items-center text-xl px-8'>
        <ul className='sm:flex gap-10 hidden items-center'>
          <li className='flex items-center text-[#24582a]'><span className="material-symbols-outlined mr-2 text-[#24582a]">Home</span>Home</li>
          <li className='flex items-center text-[#24582a]'><span className="material-symbols-outlined mr-2 text-[#24582a]">history_edu</span>My Blogs</li>
          <li className='flex items-center text-[#24582a]'><span className="material-symbols-outlined mr-2 text-[#24582a]">diversity_3</span>About</li>
          <li className='flex items-center text-[#24582a]'><span className="material-symbols-outlined mr-2 text-[#24582a]">contact_support</span>Contact</li>
        </ul>
        <div style={{ backgroundImage: `url(${Avatar})` }} className={`p-5 w-10 h-10 bg-contain bg-no-repeat rounded-full`}>
        </div>
        <span className="material-symbols-outlined sm:hidden block select-none" onClick={() => { setMenuType(MenuType === "Menu" ? "Sort" : "Menu") }}>
          {MenuType}
        </span>
      </nav>
      <div className='w-[98vw] h-[1px] bg-[#24582a] mx-3 mt-1'  ></div>
    </>

  )
}
export default Navbar
