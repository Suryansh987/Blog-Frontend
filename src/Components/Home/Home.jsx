import React from 'react'
import HomeBlog from './HomeBlog'
import Contact from './Contact'
import HomeAbout from './HomeAbout'


const Home = () => {
  return (
    <>
    <div className='font-Marmelad text-text-color text-center w-10/12 m-auto'>
      <span className='block md:text-8xl sm:text-5xl text-4xl my-6'>Your Personal Blogging Platform</span>
      <span className='block my-5 text-xl'>Explore Yourself with Writing </span>
      <div className='bg-[url("/First.jpg")] w-[80vw] lg:h-[80vh] md:h-[60vh] sm:h-[40vh] min-[350px]:h-[30vh] h-[17vh] bg-contain bg-center bg-no-repeat '></div>
    </div>
    <HomeBlog/>
    <HomeAbout/>
    <Contact/>
    </>
  )
}

export default Home