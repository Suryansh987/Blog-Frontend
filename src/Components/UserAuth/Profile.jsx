import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Profile = () => {
  const selector = useSelector(state=>state.auth.user)
  console.log(selector);

  return (
    <>
    <div className='relative w-[70vw] bg-slate-50 h-[100vh] m-auto mt-5'>
        <div className='flex items-center text-3xl font-bold p-4'>
        <Link to="/"><span className="material-symbols-outlined mr-2 hover:bg-body-color p-4 rounded-full">arrow_back</span></Link>
        <div className='flex flex-col'>
        <span>username</span>
        <span className='text-sm font-normal'>posts</span>
        </div>
        </div>
        <div className="w-full h-[1px] border-b-8 border-body-color">
        </div>

        <div className='w-full min-[1040px]:h-[40vh] h-fit bg-gray-300 overflow-hidden'>
            <img src="https://res.cloudinary.com/dybwlpu9u/image/upload/v1706715946/Cover/mdrxyr6nuzx4t1vepio4.jpg" alt="" className='w-full object-cover'/>
        </div>
        <div className='rounded-full h-[200px] w-[200px] bg-black absolute top-64 left-20 overflow-hidden border-8 border-white'>
            <img src="https://res.cloudinary.com/dybwlpu9u/image/upload/v1706519441/Avatar/h2w4cdnhxo5opzpnyydq.png" alt="" />
        </div>
        <div className='text-right mt-10'>
          <span className='p-4 border-2 border-text-color hover:bg-text-color hover:text-body-color mr-10 rounded-full'>Edit Profile</span>
        </div>
        <div className='mt-12 flex flex-col gap-1 text-justify w-4/5 m-auto'>
          <span className='font-bold text-3xl '>{selector.name}</span>
          <span className=''>{selector.email}</span>
          <span className='mt-4 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita id ex perspiciatis nulla inventore ut neque sequi dolor, debitis quas similique quaerat quod reiciendis repudiandae, atque quia eligendi molestias voluptas. Mollitia eligendi inventore, explicabo ab eveniet, repellat officia nostrum architecto atque voluptatibus dolor saepe!</span>
        </div>
    </div>
    </>
  )
}

export default Profile