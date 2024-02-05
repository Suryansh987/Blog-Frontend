import React from 'react'
import Navbar from './Components/Navbar'
import Drawer from './Components/Drawer'
import { Outlet, useLocation } from 'react-router-dom'


const App = () => {
  const navigate = useLocation()
  console.log(navigate);
  return (
    <div>
        <Navbar Avatar={"https://res.cloudinary.com/dybwlpu9u/image/upload/v1706519441/Avatar/h2w4cdnhxo5opzpnyydq.png"} />
        {/* <Drawer /> */}
        <Outlet/>
    </div>
  )
}

export default App

