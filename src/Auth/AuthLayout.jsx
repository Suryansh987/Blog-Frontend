import React from 'react'
import { useSelector } from 'react-redux'

const AuthLayout = ({children,Authentication=true}) => {

    const selector = useSelector(state => state.logged)
    console.log(Authentication, selector);
    console.log(children);
  return (
    <div>{children}</div>
  )
}

export default AuthLayout