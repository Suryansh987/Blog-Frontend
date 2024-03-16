import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import UserPost from './UserPost'


const Profile = () => {
  const selector = useSelector(state => state.auth.user)
  const { name, email, avatar_url, cover_url } = selector

  return (
    <>
      <div className='relative md:w-[70vw] bg-slate-50 m-auto mt-5'>
        <div className='flex items-center text-3xl font-bold p-4'>
          <Link to="/"><span className="material-symbols-outlined mr-2 hover:bg-body-color p-4 rounded-full">arrow_back</span></Link>
          <div className='flex flex-col'>
            <span>username</span>
            <span className='text-sm font-normal'>posts</span>
          </div>
        </div>
        <div className="w-full h-[1px] border-b-8 border-body-color">
        </div>

        <div className='w-full h-[260px] bg-gray-300 overflow-hidden'>
          <img className='h-full w-full object-center' src={`${cover_url ? cover_url : 'https://res.cloudinary.com/dybwlpu9u/image/upload/v1706519441/Avatar/h2w4cdnhxo5opzpnyydq.png'}`} alt="" />
        </div>
        <div className='rounded-full h-[200px] w-[200px] bg-black absolute top-64 left-20 overflow-hidden border-8 border-white'>
          <img className='h-full w-full object-cover object-center' src={`${avatar_url ? avatar_url : 'https://res.cloudinary.com/dybwlpu9u/image/upload/v1706519441/Avatar/h2w4cdnhxo5opzpnyydq.png'}`} alt="" />
        </div>
        
        <div className=' relative mt-36 flex flex-col gap-1 text-justify w-4/5 h-fit m-auto'>
          <span className='font-bold text-3xl '>{name}</span>
          <span className=''>{email}</span>
          <span className='absolute top-5 right-0'>
          <span className='p-4 border-2 border-text-color hover:bg-text-color hover:text-body-color mr-10 rounded-full'>Edit Profile</span>
        </span>
          <span className='mt-4 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita id ex perspiciatis nulla inventore ut neque sequi dolor, debitis quas similique quaerat quod reiciendis repudiandae, atque quia eligendi molestias voluptas. Mollitia eligendi inventore, explicabo ab eveniet, repellat officia nostrum architecto atque voluptatibus dolor saepe!</span>
        </div>
        <UserPost />
      </div>
    </>
  )
}

export default Profile