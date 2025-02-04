import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInPage from './pages/Login/Login'
import  SignupF from './pages/Signup/Signup'
import SignupForm from './pages/Signup/Signup'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './components/Homepage/Home'
import Jobs from './components/jobs/Jobs'
import Browse from './components/Browse'

import Profile from './components/profile'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element:<Profile/>
  },
])

function App() {


  return (
    <>
<RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
