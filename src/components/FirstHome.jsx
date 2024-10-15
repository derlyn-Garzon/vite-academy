import React from 'react'
//import Svg1 from './assets/Svg1.svg'
import reactLogo from '../assets/svg1.png'




const Home = ({name}) => {

  return (
    <>
        <div class="container-fluid image-container">
          <img 
            src={reactLogo}
            alt="Imagen centrada" 
            className="img-fluid"
          />
        </div>
    </>
  )
}

export default Home