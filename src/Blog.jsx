import React, { useState } from 'react'
import MarkdownParser from './Components/MarkdownParser'
const Blog = () => {
    const [MarkdownText, setMarkdownText] = useState(`Type Here`)

  return (
    <>
      <textarea name="blogText" id="blogText" cols="30" rows="10" value = {MarkdownText} onChange={(e)=>{setMarkdownText(e.target.value)}}></textarea>
      <MarkdownParser markdownValue={MarkdownText}/>
    </>
  )
}

export default Blog
