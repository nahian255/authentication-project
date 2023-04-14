import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import About from './Component/About'
import SimpleLogin from './Component/SimpleLogin'
import Singin from './Component/Singin'
import Singup from './Component/Singin'
import Context from './Context/Context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: 'simple_login',
          element: <SimpleLogin></SimpleLogin>
        },
        {
          path: 'singin',
          element: <Singup></Singup>
        },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>

    </Context>
  </React.StrictMode>,
)
