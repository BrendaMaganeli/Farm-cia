import React from 'react'
import logoMaior from '../assets/logoMaior.png'
import camisetas from '../assets/camisetas.png'
import cartao from '../assets/cartoes.png'
import './Body.css'
function Body() {
  return (
    <div>
    <div className='divs-principais'>
    <div className='Márcia'>
      <h1>Novidades na Farmácia mais famosa do seu bairro!!</h1>
      <p className='titulo'>Cadastre- se no site e receba nossos itens promocionais.</p>
      <button>Participe já</button>
    </div>
    <img src={logoMaior} alt="" className='Img'/>
    </div>

    <h2>Kits Promocionais</h2>
    
    <div className='Promocionais'>
      <img src={camisetas} alt="" className='camiseta'/>
      <p className='promocao'> Na compra do seu primeiro produto na nova dirtoria da Farmácia, receba uma camiseta para arrasar nas nossas campanhas!</p>
   
      <img src={cartao} alt="" className='camiseta'/>
      <p className='promocao'> Cadastre já seu cartão no nosso site e tenha acesso as melhores promoções dentro do site e nas lojas físicas!</p>

    </div>
    </div>
  )
}

export default Body
