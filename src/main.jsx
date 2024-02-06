import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './App/Store.js'
import './index.css'


import App from './App'
import AuthLayout from './Auth/AuthLayout.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Signin from './Components/Signin.jsx'
import Blog from './Components/Blog.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path : "/",
        element : <Home/>
      },
      {
        path: "/blog",
        element: (<AuthLayout authentication={true}>
          <Blog />
        </AuthLayout>)
      },
      {
        path: "/login",
        element: (<AuthLayout authentication={false}>
          <Login />
        </AuthLayout>)
      },
      {
        path: 'signin',
        element: (<AuthLayout authentication={false}>
          <Signin />
        </AuthLayout>)
      }
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
