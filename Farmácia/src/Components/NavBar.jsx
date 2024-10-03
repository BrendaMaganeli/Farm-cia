
import { Link } from 'react-router-dom';
import logopq from '../assets/logopq.png';
import './NavBar.css'

function NavBar() {
  return (
    <div className='container'>
        <img src={logopq} alt="" className='img-Nav'/>
        <Link to='/'>
        <label htmlFor="">Novidade</label>
        </Link>
        <label htmlFor="">Início</label>
        <Link to='/servicos'>
        <label htmlFor="">Serviços</label>
        </Link>
        <button className='enter'>Entrar</button>

    </div>
  )
}

export default NavBar
