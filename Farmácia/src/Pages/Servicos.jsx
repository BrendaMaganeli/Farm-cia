import React from 'react'
import fotoR from '../assets/remedio.png'
import fotoM from '../assets/maquiagem.png'
import fotoC from '../assets/cremes.png'
import './servicos.css'
function Servicos() {
  return (

    <div className='Fonte'>
      <h2>Remédios</h2>
      <div className='remedios'>
        <div className='div'>   

            <img src={fotoR} alt="" className='remedio'/>
            <h6>Dipirona</h6>
            <p>R$40,00</p>
            <button>Comprar</button>
        </div>
        <div className='div'>
            <img src={fotoR} alt="" className='remedio'/>
            <h6>Loratadina</h6>
            <p>R$20,00</p>
            <button>Comprar</button>
        </div>
        <div className='div'>
        
            <img src={fotoR} alt="" className='remedio'/>
            <h6>Diclofenaco</h6>
            <p>R$10,00</p>
            <button>Comprar</button>
        </div>
        <div className='div'>
        
        <img src={fotoR} alt="" className='remedio'/>
        <h6>sertralina</h6>
        <p>R$259,99</p>
        <button>Comprar</button>
    </div>
    <div className='div'>
        
        <img src={fotoR} alt="" className='remedio'/>
        <h6>Zolpidem</h6>
        <p>R$57,00</p>
        <button>Comprar</button>
    </div>
    </div>
    



    <h2>Cosméticos</h2>
    <div className='cosmeticos'>
    <div className='divs'>
        
        <img src={fotoC} alt="" className='remedio'/>
        <h6>Base N11</h6>
        <p>R$57,00</p>
        <button>Comprar</button>
    </div>
    <div className='divs'>
        
        <img src={fotoM} alt="" className='remedio'/>
        <h6>Blush </h6>
        <p>R$57,00</p>
        <button>Comprar</button>
    </div>
    <div className='divs'>
        
        <img src={fotoC} alt="" className='remedio'/>
        <h6>Creme AA</h6>
        <p>R$57,00</p>
        <button>Comprar</button>
    </div>
    <div className='divs'>
        
        <img src={fotoM} alt="" className='remedio'/>
        <h6>Pincel B</h6>
        <p>R$57,00</p>
        <button>Comprar</button>
    </div>
    <div className='divs'>
        
        <img src={fotoC} alt="" className='remedio'/>
        <h6>Sombra M</h6>
        <p>R$57,00</p>
        <button className=''>Comprar</button>
    </div>
    </div>
    </div>
  )
}

export default Servicos
