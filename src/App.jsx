import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Drawer from './Components/Drawer'
import Intro from './Components/Intro'
import Blog from './Blog'

const App = () => {
  return (
    <>
      <Navbar Avatar="https://res.cloudinary.com/dybwlpu9u/image/upload/v1706519441/Avatar/h2w4cdnhxo5opzpnyydq.png"/>
      <Drawer/>
      <Intro/>
      <Blog/>
    </>
  )
}

export default App

