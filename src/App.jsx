import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <Navbar Avatar={"https://res.cloudinary.com/dybwlpu9u/image/upload/v1706519441/Avatar/h2w4cdnhxo5opzpnyydq.png"} />
        <Outlet/>
    </div>
  )
}

export default App

