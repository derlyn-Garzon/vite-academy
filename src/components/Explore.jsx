import React from 'react'
import exploreLogo from '../assets/Svg.png'
import slideLogo from '../assets/Slider.png'
import { Link } from 'react-router-dom'
import '../StylesApp.css'

const Explore = () => {
  return (
    <>
      <div class="container-fluid image-container" style={{ textAlign: 'center', fontFamily:'Inter', color:'#4B4B4B' }}>
        <div className='divLogoIma'>
          
          <img 
                src={exploreLogo}
                alt="Imagen centrada" 
                className="img-fluid logosIma"
                style={{marginBottom:'10px'}}
            /> 
          </div>  
          <div style={{fontSize:'24px', fontWeight:'700', marginTop:'70px', textAlign:'left'}}>
        Explore new courses
        </div>
        
        <div style={{fontSize:'14px', fontWeight:'400',  textAlign:'left'}}>  
          Study and watch all our new courses
          and there are many of them
        </div>
        
        <div style={{textAlign:'left'}}>
          <img 
              src={slideLogo}
              alt="Imagen slide" 
              style={{width:'70px', marginBottom:'40px', marginTop:'40px'}}
              
          />
        </div>

        <div  className='fix-bot' style={{padding:'20px'}}>
          <Link to='/seegoals' className='custom-link'>
              <button style={{
                marginTop: '10px',  // Espacio entre imagen y botón
                padding: '10px 20px', // Ajuste opcional del botón
                display: 'inline-block',
                background: 'linear-gradient(to right, #BFC3FC, #A2C3FC)', // Gradient background
                width:'100%',
                fontSize:'14px',
                fontWeight:'400',
                color:'#4B4B4B'
              }}>Next</button>
            </Link>
        </div>

      </div>
    </>
    
  )
}

export default Explore