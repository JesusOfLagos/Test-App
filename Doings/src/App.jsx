import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Components/Navbar/Navbar"
import Logo from "./Components/Navbar/logo"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logo />
    <Button /><h1>My Name is Jesus</h1></> 
  )
}

export default App
