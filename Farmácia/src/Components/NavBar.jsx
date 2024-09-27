
import logopq from '../assets/logopq.png';
import './NavBar.css'

function NavBar() {
  return (
    <div className='container'>
        <img src={logopq} alt="" className='img-Nav'/>

        <label htmlFor="">Novidade</label>
        <label htmlFor="">Início</label>
        <label htmlFor="">Serviços</label>
        <button className='enter'>Entrar</button>

    </div>
  )
}

export default NavBar
