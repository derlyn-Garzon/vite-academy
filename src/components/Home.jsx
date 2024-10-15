import React from 'react'
//import Svg1 from './assets/Svg1.svg'
import logoapp from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../StylesApp.css'



const Home = ({name}) => {

  return (
    <>
        <div className="container-fluid image-container logos">
          <div className='divLogoIma'>
            <img 
              src={logoapp}
              alt="Imagen centrada" 
              className="img-fluid logosIma"
              style={{marginBottom:'10px'}}
            />
            
          </div>
            
          
          
          <div  className='fix-bot' style={{padding:'20px'}}>
          <Link to='/explore' className='custom-link'>
              <button  style={{
                marginTop: '10px',  // Espacio entre imagen y botón
                padding: '10px 20px', // Ajuste opcional del botón
                display: 'inline-block',
                background: 'linear-gradient(to right, #BFC3FC, #A2C3FC)', // Gradient background
                width:'100%',
                fontSize:'14px',
                fontWeight:'400',
                color:'#4B4B4B',
                textDecoration:'none',

              }}>Next</button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Home