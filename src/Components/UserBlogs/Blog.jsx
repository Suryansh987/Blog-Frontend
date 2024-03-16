import React from 'react'

const Blog = (props) => {
    const { title , user , description, options } = props
    const reg1 = /```[\s\S]*?```/g
    const reg2 = /(?:__|[*#]|\[(.*?)\]\(.*?\)|~)/g
    const preview = description.replace(reg1,"");
    const text = preview.replace(reg2, '$1');
    const handleDelete = (e) => {
      console.log(e);
    }
  return (
    <>
        <div className=' flex flex-col gap-4 shadow-lg shadow-orange-300 my-8 py-4 px-8 bg-text-color text-body-color hover:bg-emerald-900'>
            <h1 className='text-4xl font-Marmelad hover:underline underline-offset-4 cursor-pointer'>{title}</h1>
            <span className='italic font-extralight'>Posted By :{" "} <span className='hover:underline underline-offset-4 cursor-pointer'>{user}</span></span>
            <p className='text-xl font-serif'>
                    {text}
            </p>
            <span className={`${options?"flex":"hidden"} gap-8 font-bold`}>
              <span className='cursor-pointer hover:underline underline-offset-8'>Update</span>
              <span className='cursor-pointer hover:underline underline-offset-8'>Delete</span>
            </span>
        </div> 
    </>
  )
}

export default Blog
