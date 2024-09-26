import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import placa from '../src/assets/placa.png'
import logoMaior from '../src/assets/logoMaior.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <img src={logoMaior} alt="" className='Img'/>
    <div className='Márcia'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Nulla rerum incidunt sed similique unde numquam temporibus autem consequatur ducimus, magnam tempore doloremque, 
      laudantium voluptates eum, repellendus itaque doloribus odit? Dicta?
    </div>
    </>
  )
}

export default App
