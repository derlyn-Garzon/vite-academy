import React from 'react'
import menuima1 from '../assets/SvgMen3.png'
import menuima2 from '../assets/SvgMen1.png'
import menuima3 from '../assets/SvgMen2.png'
import menuima4 from '../assets/Svg0.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';




const MenuBar = () => {
    const navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        sessionStorage.removeItem('user');
        navigate("/login");
    }

  return (
    <>
        <div className='menuBarGrid' style={{width:'100%'}}>
            <div>
                <img 
                    src={menuima1}>
                </img>
            </div>
            <div>
                <img 
                    src={menuima2}>
                </img>
            </div>
            <div>
                <img 
                    src={menuima3}>
                </img>
            </div>
            <div>
                
                    <img onClick={handleSubmit}
                        src={menuima4}>
                    </img>
                
            </div>
        </div>
    </>
  )
}

export default MenuBar