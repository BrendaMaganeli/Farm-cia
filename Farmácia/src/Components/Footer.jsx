import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
function Footer() {
  return (
    <div className='aa'>
        <img src={logo} alt="" className='logo'/>
        <div className='footer'>
        <h3>Serviços</h3>
        <p >Politica de Privacidade</p>
        <p >Sobre nós</p>
        <p >Serviços</p>
        </div>
        <div className='footer'>
        <h3>Saiba Mais</h3>
        <p >Cartões</p>
        <p >Kits Promocionais</p>
        </div>
        <div className='footer'>
        <h3>contato</h3>
        <p >(48) 55555555</p>
        <p >Farmácia@gmail</p>
        </div>

    </div>
  )
}

export default Footer
