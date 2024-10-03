import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
