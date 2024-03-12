import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cookieLogin } from './Fetcher'
import { fetchBlogs } from '../App/BlogSlicer'
import { login } from '../App/AuthSlicer'

const AuthLayout = ({ children, authentication = true }) => {
  const [loader, setLoader] = useState(false)
  const authStatus = useSelector(state => state.auth.logged)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const setUser = async () => {
    const userData = await cookieLogin()
    const { user,error } = userData
    if(error){
      navigate('/login')
    }
    else if(user){
      dispatch(login(user))
      dispatch(fetchBlogs())
    }
  }

  useEffect(() => {

    if(authentication===false){
      if (document.cookie.includes('token=')) {
        setUser()
      }
      navigate('/')
    }

    if(authentication!==authStatus){
      if(authentication===false){
        if (document.cookie.includes('token=')) {
          setUser()
        }
        navigate('/')
      }
      else{
        if (document.cookie.includes('token=')) {
          setUser()
        }
        else {
          navigate('/login')
        }
      }
    }
    // if (authentication && authStatus !== authentication) {
    //   if (document.cookie.includes('token=')) {
    //     const setUser = async () => {
    //       const userData = await cookieLogin()
    //       const { user,error } = userData
    //       if(error){
    //         navigate('/login')
    //       }
    //       else if(user){
    //         dispatch(login(user))
    //         dispatch(fetchBlogs())
    //       }
    //     }
    //     setUser()
    //   }
    //   else {
    //     navigate('/login')
    //   }
    // }
    // else if (!authentication && authStatus !== authentication) {
    //   navigate('/')
    // }
    setLoader(true)
  }, [authStatus, authentication, navigate])


  return loader ? <>{children}</> : null
}

export default AuthLayout