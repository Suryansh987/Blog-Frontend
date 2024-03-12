import React, { useState } from 'react'
import BlogBox from './BlogBox'
import { useSelector } from 'react-redux'

const HomeBlog = () => {
  const selectorValues = useSelector(state=>state.blog.Blogs)
  const blogs = selectorValues.length > 3? selectorValues.slice(0,4) : selectorValues

  return (
    <>
    <div className='md:text-7xl text-4xl font-Marmelad text-text-color w-[80vw] m-auto my-8'>Blogs</div>
    <div className='flex gap-4 w-[80vw] min-[350px]:overflow-x-scroll max-[350px]:flex-wrap m-auto mb-6 text-text-color scrollbar-none'>
      { blogs.map((blog)=>(<BlogBox key={blog._id} title={blog.title} description={blog.description} user={blog.user} />)) }
      <div className='flex flex-col flex-shrink-0 relative md:w-[350px] w-[250px] h-[470px] bg-card md:text-6xl text-4xl justify-center items-center font-Marmelad hover:underline underline-offset-4 cursor-pointer '>
        <span >View All</span>
        <span className='material-symbols-outlined material-symbols-outlined-selected text-6xl'>arrow_circle_right</span>
      </div>
    </div>

    </>
  )
}

export default HomeBlog