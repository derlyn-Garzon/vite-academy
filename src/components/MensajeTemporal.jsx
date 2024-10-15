import React, { useEffect, useState } from 'react'

const MensajeTemporal = () => {
  
    const [visible,setVisible] = useState(true);
    useEffect(()=> {
        const temporizador = setTimeout(()=>{setVisible(false)},3000);
        
    },[]);
    return (visible && <p>¡Bienvenido! Este mensaje desaparecerá en 3 segundos.</p>);
}

export default MensajeTemporal
    
