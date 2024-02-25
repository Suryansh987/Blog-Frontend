import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../App/AuthSlicer';

const AvatarOptions = (props) => {
  const navigate = useNavigate()
  const authStatus = useSelector(state=>state.auth.logged)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
    const { isOpen } = props
    return (
      <div className={`${authStatus===true?isOpen?"block":"hidden":"hidden"} flex flex-col w-52 h-fit bg-white text-center py-2 relative top-8 right-48 shadow-[2px 5px 11px 0 #879188] ${isOpen?"block":"hidden"} z-10`}>
          <Link to="/profile" className={`py-2 hover:bg-gray-200 px-3`}>Profile</Link>
          <Link to="/login" className={`py-2 hover:bg-gray-200 px-3`} onClick={handleLogout}>Logout</Link>
      </div>
    );
}

export default AvatarOptions