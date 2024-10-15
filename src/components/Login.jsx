import React, { useEffect, useState } from 'react'
import { DivContainer } from '../styles/Styled'
import useForm from '../Hooks/useForm';
import data from '../data/datos.json'
import { getData } from '../helpers/peticiones';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const  Login = () => {
    const [datosUser, setDatosUser]=useState();
    
    //en vez de useState usar useForm hook personalizado
    const [datosFormulario, handleChange,reset]=useForm({
        username:'',//telefono
        pass:'',
    });
    
    

    const navigate = useNavigate();

    //no es neceario crear el handlechange porque viene del hook useform
    const  handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(datosFormulario);
        console.log('submit handle');
        console.log(datosUser);
        console.log(datosFormulario.tel);
        console.log(datosFormulario.pass);
        
        const respFind = datosUser?.find(
            (fi) =>
              fi.tel === datosFormulario.username && fi.password === datosFormulario.pass
        );
        
        if (respFind !== undefined) {
            alert("Bienvenido");
            //creando la session,
            sessionStorage.setItem('user', JSON.stringify(respFind)); //Almacenando el usuario como string
            navigate("/verificacion");
          } else {
            alert("Usuario no existe");
        }

        console.log('respfind');
        console.log(respFind);
        reset();//viene de useform
    }
    
    const url_usuarios = 'http://localhost:3000/usuarios';
  
    useEffect(() => {

        async function carga() {
          const users = await getData(url_usuarios);
          console.log('useeffects')
          console.log(users);
          setDatosUser(users);
        }

        carga();
      }, []);

    

    return (    
    <>
    <body style={{placeItems:'flex-start', minWidth:'auto'}}>
        <div class="container-fluid image-container" style={{ textAlign: 'center', fontFamily:'Inter', color:'#4B4B4B',width:'100%' }}>
        
            <div style={{fontSize:'24px', fontWeight:'700', marginTop:'70px', textAlign:'left'}}>
                Welcome back
            </div>
            <div style={{fontSize:'14px', fontWeight:'400',  textAlign:'left'}}>  
                Sign in to an existing account
                using your phone number
            </div>
            <form onSubmit={handleSubmit}>
               
                <input className='Input'
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Ingrese Número"
                        onChange={handleChange}
                        required
                />

                <input className='Input'
                    type="password"
                    id="pass"
                    name="pass"
                    placeholder="Ingrese Password"
                    onChange={handleChange}
                    required
                />

                
                <div  className='fix-bot' style={{padding:'20px'}}>    
                    <button style={{
                        marginTop: '10px',  // Espacio entre imagen y botón
                        padding: '10px 20px', // Ajuste opcional del botón
                        display: 'inline-block',
                        background: 'linear-gradient(to right, #BFC3FC, #A2C3FC)', // Gradient background
                        width:'100%',
                        fontSize:'14px',
                        fontWeight:'400',
                        color:'#4B4B4B'
                        }}>Login</button>
                    <div style={{marginTop:'10px'}} >Don't have account? <Link to='/registro' className='custom-link'>
                    Sign up </Link></div>
                </div>
                
                
            </form>

            

            </div>
        </body>
    </>
  )
}

export default Login