import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const UserBlogs = () => {
  const blogs = useSelector( state =>state.blog.Blogs)
  return (
    <>
    <div className='w-[90vw] m-auto mt-10'>
        <h1 className='text-center text-6xl text-text-color font-Marmelad'>Blogs</h1>
        {blogs.map((blog)=>(
          <Blog key={blog._id} title={blog.title} user={blog.user} description={blog.description} />
        ))}
    </div>
    </>
  )
}

export default UserBlogs