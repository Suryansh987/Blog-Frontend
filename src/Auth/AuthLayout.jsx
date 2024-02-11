import React,{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({children,authentication=true}) => {
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.logged)
    // console.log(authentication,selector);
    const navigate = useNavigate()
    
    useEffect(() => {
      console.log(authStatus !== authentication,authStatus,authentication);
      if(authStatus !== authentication ){
        navigate('/login')
      }
    }, [authStatus,authentication,navigate])
    

  return loader?<>{children}</>:null
}

export default AuthLayout