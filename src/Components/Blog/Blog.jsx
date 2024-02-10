import React, { useState } from 'react'
import MarkdownParser from './MarkdownParser'
const Blog = () => {
  const [MarkdownText, setMarkdownText] = useState(`Type Here`)

  return (
    <>
      <div className='md:w-[80vw] m-auto mt-6'>
        <p className='font-Marmelad text-text-color md:text-6xl text-3xl text-center'>Want to Express.... Express Here</p>
        <div className='max-md:w-[80vw] m-auto'>
        <form action="" method="post">
          <input className='my-2 w-full px-3 py-3' type="text" name="title" id="title" placeholder='Enter the Title of your Blog....' />
          <br />
          <input className='my-2 w-full px-3 py-3' type="text" name="title" id="title" placeholder='Tag Your Blog is related to...'/>
          <br />
          <span className='text-red-400 ml-2'>Choose Thumbnail*</span>
          <input className='my-2 w-full px-3 py-3' type="file" name="thumbnail" id="thumbnail"/>
          <textarea className='w-full px-3 my-2 py-2' name="blogText" id="blogText" cols="30" rows="10" value={MarkdownText} onChange={(e) => { setMarkdownText(e.target.value) }}></textarea>
        </form>
        </div>
       <div className='bg-body-color p-5'>
        <p className='text-text-color font-Marmelad md:text-5xl text-3xl text-center my-5'>Preview of How Your Blog will appear
        </p>
        <div className='border-2 border-text-color p-6'>
       <MarkdownParser markdownValue={MarkdownText} />
       </div>
       </div>
      </div>
    </>
  )
}

export default Blog
