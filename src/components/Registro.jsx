import React from 'react'
import useForm from '../Hooks/useForm';
import { getData, postData } from '../helpers/peticiones';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function
import { Link, Navigate, useNavigate } from 'react-router-dom';



const Registro = () => {
    //en vez de useState usar useForm hook personalizado
    const [datosFormulario, handleChange, reset]=useForm({
        nombre:'',
        email:'',
        tel:'',
        pass:'',
    });


    const url_usuarios = 'http://localhost:3000/usuarios';
    
    const navigate = useNavigate();

    //no es neceario crear el handlechange porque viene del hook useform
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        console.log('datos formulario');
        console.log(datosFormulario);
        const nuevoUsuario ={
            id: uuidv4(),
            ...datosFormulario,
            terminados: [],
        }

        console.log('nuevo usuario');
        console.log(nuevoUsuario);
        const resp = await postData(url_usuarios,nuevoUsuario);    
        console.log('Respuesta del post:');
        console.log(resp);
    
        if (resp.status === 201) {
            alert("Usuario Registrado con Exito!");
            sessionStorage.setItem('user', JSON.stringify(nuevoUsuario)); //Almacenando el usuario como string
                
            navigate("/landing");
        }else{
            alert('algo salió mal');
        }

        reset();//viene de useform
    }
    


  return (
        <body style={{placeItems:'flex-start'}}>
        
            <div class="container-fluid image-container" style={{ textAlign: 'center', fontFamily:'Inter', color:'#4B4B4B',width:'100%' }}>
                <div style={{fontSize:'24px', fontWeight:'700', marginTop:'70px', textAlign:'left'}}>
                    Create new Account
                </div>
                <div style={{fontSize:'14px', fontWeight:'400',  textAlign:'left'}}>  
                Create a new account by filling in all the
                fields or log in to an existing account
                </div>
                <form onSubmit={handleSubmit}>
                    <input className='Input'
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese Nombre"
                        required
                        onChange={handleChange}
                    />
                    <input className='Input'
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingrese Email"
                        required
                        onChange={handleChange}
                    />
                    <input className='Input'
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingrese Password"
                    required
                    onChange={handleChange}
                    />
                    <input className='Input'
                    type="text"
                    id="tel"
                    name="tel"
                    placeholder="Ingrese teléfono"
                    required
                    onChange={handleChange}
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
                    }}>Create</button>
        
             </div>
                </form>
                
            </div>    
        </body>        

  )
}

export default Registro