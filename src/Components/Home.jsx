import React from 'react'
import HomeBlog from './HomeBlog'

const Home = () => {
  return (
    <>
    <div className='font-Marmelad text-text-color text-center w-10/12 m-auto'>
      <span className='block text-8xl my-6'>Your Personal Blogging Platform</span>
      <span className='block my-5 text-xl'>Explore Yourself with Writing </span>
      <div className='bg-[url("/First.jpg")] w-[80vw] h-[80vh] bg-cover bg-no-repeat m-auto'></div>
    </div>
    <HomeBlog/>
    </>
  )
}

export default Home