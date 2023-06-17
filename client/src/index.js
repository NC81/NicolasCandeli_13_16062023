import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layouts/layout'
import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
