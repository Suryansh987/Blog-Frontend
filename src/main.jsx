import React,{StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './Blog.jsx'
import { Provider } from 'react-redux'
import { store } from './App/Store.js'
import AuthLayout from './Auth/AuthLayout.jsx'
import Home from './Components/Home'
import Login from './Components/Login'
import Signin from './Components/Signin'

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
        path: "blog",
        element: (<AuthLayout authentication={true}>
          <Blog />
        </AuthLayout>)
      },
      {
        path: "login",
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
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>
)
