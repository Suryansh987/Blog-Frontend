import React from 'react'
import Blog from '../UserBlogs/Blog'
import { useSelector } from 'react-redux'

const UserPost = () => {
  const blogs = useSelector( state =>state.blog.Blogs)
  return (
    <div className='m-auto mt-4 w-4/5'>
      <div className='text-center text-3xl font-Marmelad text-text-color font-bold'>Your Posts</div>
      <div className='h-[1px] bg-text-color mt-3'></div>
      {blogs.map((blog)=>(
          <Blog key={blog._id} title={blog.title} user={blog.user} description={blog.description} options={true}/>
        ))}

    </div>
  )
}

export default UserPost