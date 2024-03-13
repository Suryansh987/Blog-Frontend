import React from 'react'

const Blog = (props) => {
    const { title , user , description } = props
    const reg1 = /```[\s\S]*?```/g
    const reg2 = /(?:__|[*#]|\[(.*?)\]\(.*?\)|~)/g
    const preview = description.replace(reg1,"");
    const text = preview.replace(reg2, '$1');
  return (
    <>
        <div className=' flex flex-col gap-4 shadow-lg shadow-orange-300 my-8 py-4 px-8 bg-text-color text-body-color hover:bg-emerald-900'>
            <h1 className='text-4xl font-Marmelad'>{title}</h1>
            <span className='italic font-extralight'>Posted By :{" "} <span className='hover:underline underline-offset-4'>{user}</span></span>
            <p className='text-xl font-serif'>
                    {text}
            </p>
        </div> 
    </>
  )
}

export default Blog
