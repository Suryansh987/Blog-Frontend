import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './App/Store.js'
import './index.css'


import App from './App.jsx'
import AuthLayout from './Auth/AuthLayout.jsx'
import Home from './Components//Home/Home.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Signin from './Components/UserAuth/Signin.jsx'
import Login from './Components/UserAuth/Login.jsx'
import UserBlogs from './Components/UserBlogs/UserBlogs.jsx'
import About from './Components/About/About.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Profile from './Components/UserAuth/profile.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path : "/",
        element : (<AuthLayout authentication={true}>
          <Home />
        </AuthLayout>)
      },
      {
        path: "/blog",
        element: (<AuthLayout authentication={true}>
          <Blog />
        </AuthLayout>)
      },
      {
        path : '/userblogs',
        element : (<AuthLayout authentication={true}>
          <UserBlogs />
        </AuthLayout>
        )
      },
      {
        path: "/login",
        element: (<AuthLayout authentication={false}>
          <Login />
        </AuthLayout>)
      },
      {
        path: '/signin',
        element: (<AuthLayout authentication={false}>
          <Signin />
        </AuthLayout>)
      },
      {
        path : '/about',
        element: <About/>
      },
      {
        path : '/profile',
        element: (<AuthLayout authentication={true}>
          <Profile />
        </AuthLayout>)
      }
    ],
  },
  {
    path: '*',
    element:<ErrorPage/>
    },  
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
