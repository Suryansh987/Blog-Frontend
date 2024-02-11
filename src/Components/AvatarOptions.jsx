import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const AvatarOptions = (props) => {
  const authStatus = useSelector(state=>state.auth.logged)
    const { isOpen } = props
    return (
      <div className={`flex flex-col w-52 h-fit bg-white text-center py-2 relative top-8 right-48 shadow-[2px 5px 11px 0 #879188] ${isOpen?"block":"hidden"}`}>
          <Link to="/" className='py-2 hover:bg-slate-200 px-3'>Profile</Link>
          <Link to="/" className='py-2 hover:bg-slate-200 px-3'>My Account</Link>
          <Link to="/login" className={`${authStatus===true?"block":"hidden"} py-2 hover:bg-gray-200 px-3`}>Logout</Link>
      </div>
    );
}

export default AvatarOptions