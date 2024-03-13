import React, { useState } from 'react'
import MarkdownParser from './MarkdownParser'
import { useForm } from 'react-hook-form'
import { postBlog } from '../../Auth/Fetcher'
import { useDispatch } from 'react-redux'
import { create } from '../../App/BlogSlicer'

const Blog = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()

  const MarkdownValue = watch('description')
   
  console.log(MarkdownValue);

  const dispatch = useDispatch()
  const blogSubmit= async(formData) =>{
    const data = await postBlog(formData)
    dispatch(create(data))
  }


  return (
    <>
      <div className='md:w-[80vw] m-auto mt-6'>
        <p className='font-Marmelad text-text-color md:text-6xl text-3xl text-center'>Want to Write.... Write Here</p>
        <div className='max-md:w-[80vw] m-auto border-2 border-text-color p-4 mt-6'>
          <form action="" method="post" onSubmit={handleSubmit(blogSubmit)}>
            <input className='my-2 w-full px-3 py-3 outline-orange-300' type="text" placeholder='Enter the Title of your Blog....' {...register('title')}/>
            <br />
            <input className='my-2 w-full px-3 py-3 outline-orange-300' type="text" placeholder='Tag Your Blog is related to...' {...register('tag')}/>
            <br />
            <span className='text-red-500 ml-2'>Choose Thumbnail *</span>
            <input className='my-2 w-full px-3 py-3 outline-orange-300' type="file" name="thumbnail" id="thumbnail" {...register('thumbnail')} />
            <textarea className='w-full px-3 my-2 py-2 outline-orange-300' name="blogText" id="blogText" cols="30" rows="10" {...register('description')}></textarea>
            <button type="submit" className='my-3 py-3 rounded-xl w-full bg-text-color text-body-color shadow-md hover:shadow-orange-300 disabled:shadow-none disabled:cursor-not-allowed'>Submit</button>
          </form>
        </div>
        <div className='bg-body-color p-5'>
          <p className='text-text-color font-Marmelad md:text-5xl text-3xl text-center my-5'>Preview of How Your Blog will appear
          </p>
          <div className='border-2 border-text-color p-6'>
            <MarkdownParser markdownValue={MarkdownValue} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
