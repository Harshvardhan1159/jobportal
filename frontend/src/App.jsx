import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInPage from './pages/signin/signin'
import  SignupF from './pages/signup/signup'
import SignupForm from './pages/signup/signup'
import Navbar from './components/shared/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar></Navbar>
 <SignupForm></SignupForm>
    </>
  )
}

export default App
