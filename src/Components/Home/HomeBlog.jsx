import React from 'react'
import BlogBox from './BlogBox'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const HomeBlog = () => {
  const selector = useSelector(state=>state.blog.Blogs.slice(0,4))
  return (
    <>
    <div className='md:text-7xl text-4xl font-Marmelad text-text-color w-[80vw] m-auto my-8'>Blogs</div>
    <div className='flex gap-4 w-[80vw] min-[350px]:overflow-x-scroll max-[350px]:flex-wrap m-auto mb-6 text-text-color scrollbar-none'>
      { selector.map((blog)=>(<BlogBox key={nanoid} title={blog.title} description={blog.description} user={blog.user} />)) }
      <div className='flex flex-col flex-shrink-0 relative md:w-[350px] w-[250px] h-[70vh] bg-card md:text-6xl text-4xl justify-center items-center font-Marmelad hover:underline underline-offset-4 cursor-pointer '>
        <span >View All</span>
        <span className='material-symbols-outlined material-symbols-outlined-selected text-6xl'>arrow_circle_right</span>
      </div>
    </div>

    </>
  )
}

export default HomeBlog