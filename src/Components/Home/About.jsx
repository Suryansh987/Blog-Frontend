import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex justify-between text-text-color w-[80vw] m-auto mt-32 mb-16'>
      <div className='sm:w-[37vw] w-full sm:h-[80vh] h-fit min-[1080px]:pr-36 sm:pr-16 lg:pl-10 mt-5'>
        <p className='lg:text-6xl md:text-4xl mb-8 font-Marmelad'>
          Get to Know Us
        </p>
          <p className='lg:text-lg md:text-md font-light w-full'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi sunt consequuntur deleniti itaque, eius cupiditate eligendi saepe quas perspiciatis laborum ipsa sit dignissimos nobis maxime veniam facere magnam in fugiat architecto placeat ad eos. Unde consequuntur excepturi pariatur.
          </p>
          <div className='mt-8'>
          <a href='/' className='bg-text-color py-4 px-8 rounded-full text-yellow-100 font-Marmelad mt-5 md:text-base text-sm whitespace-nowrap'>Learn More</a>
          </div>
      </div>
      <div className='w-[43vw] h-[80vh] bg-[url("/Aboutbg.jpg")] bg-cover bg-center sm:block hidden'></div>
    </div>
    </>
  )
}

export default About