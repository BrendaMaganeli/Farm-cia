import { useState } from 'react'
import './App.css'
import Body from './Components/Body'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Body />
    <Footer />
    </>
  )
}

export default App
