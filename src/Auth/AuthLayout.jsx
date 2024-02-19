import React,{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({children,authentication=true}) => {
    const [loader, setLoader] = useState(false)
    const authStatus = useSelector(state => state.auth.logged)
    const navigate = useNavigate()
    
    useEffect(() => {
      if(authentication&&authStatus !== authentication ){
        navigate('/login')
      }
      else if(!authentication&&authStatus!==authentication){
        navigate('/')
      }
      setLoader(true)
    }, [authStatus,authentication,navigate])
    

  return loader?<>{children}</>:null
}

export default AuthLayout