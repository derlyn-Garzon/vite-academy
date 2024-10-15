import React, { useEffect, useState } from 'react'
import coin from '../assets/coin.png'
import notificacion from '../assets/Notification.png'
import elemental from '../assets/elemental.png'
import advanced from '../assets/advanced.png'
import { getData } from '../helpers/peticiones'
import CourseList from './courseList'
import MenuBar from './MenuBar'


const LandingAcademy = () => {  

  const usuario = JSON.parse(sessionStorage.getItem('user')); 
  const keys = Object.keys(usuario); // Get the keys
  console.log("Keys in userObject:", keys); // Output:  
  console.log('usuario:');

  console.log(usuario.nombre);
  const [usuarioLog, setUsuarioLog] = useState(usuario);
  const [cursos, setCursos] =useState([]);
  const [terminados, setTerminados] =useState([]);
  const [cursosTerminados, setCursosTerminados] =useState([]);
  
  console.log('set cursos');
  
  useEffect(() => {
    console.log('use effect');
    const url_cursos='http://localhost:3000/cursos';
    
    async function carga() {
      const cursosCarga = await getData(url_cursos);

      console.log('cursoffects');
      console.log(cursosCarga);
      cursosCarga.map((item, index) => (
        console.log(item)
        ));

      const termina = usuarioLog.terminados;  
      const terminadosIds = termina.map(termi => termi.id);
      const cursosTerminados_ = cursosCarga.filter(curso_ => terminadosIds.includes(curso_.id));
    
    // Map over the filtered courses to include duration from 'terminados'
    const cursosTerminadosT = cursosTerminados_.map(cursot => {
        // Find the corresponding 'terminado' object based on the curso id
         const terminadoC = terminados.find(t => t.id === cursot.id);
         
        // Include the duration in the new object
        return {
            ...cursot, // Spread the curso object
            duracion: terminadoC ? terminadoC.duracion : null // Add duration if found, else null
        };
    });

      

      setCursos(cursosCarga);
      setTerminados(termina);
      setCursosTerminados(cursosTerminadosT);
      //setDatosUser(users);
    }

    carga(); 
  }, []);
  
  return (
    <>
        <body className='bodyTopp'>
            <div className='headerLand'>
                <div className='headergrid'>
                    
                    {/*col1 */}
                    <div>
                        <div style={{fontSize:'24px', fontWeight:'700', marginTop:'70px', textAlign:'left'}}>
                                Hi {usuarioLog.nombre}            
                        </div>
                        <div style={{fontSize:'14px', fontWeight:'400',  textAlign:'left'}}>  
                            Let’s start learning
                        </div>
                    </div>
                    {/*col2 */}
                    <div></div>

                    {/*col3 */}
                    <div className='notificationGrid' style={{textAlign:'right'}}> 
                        <div style={{ textAlign:'center', fontSize:'24px', fontWeight:'700', marginTop:'70px'}}>
                            <div className='coinGrid'>                               
                                <div style={{textAlign:'right'}}>
                                
                                    <img 
                                    
                                        src={coin}
                                        alt="Imagen centrada" 
                                        className=""
                                        style={{ width:'30px'}}
                                    />   
                                </div>     
                                <div style={{fontSize:'10px', fontWeight:'600', fontSize:'14px', marginTop:'5px', textAlign:'left', paddingLeft:'5px'}}>400</div>
                                    <div style={{textAlign:'left'}}> 
                                    <img              
                                        src={notificacion}
                                        alt="Imagen centrada" 
                                        className=""
                                        style={{ width:'25px'}}
                                    />        
                                    </div>

                            </div>    
                        </div>
                    </div>
                </div>
                
            </div>
            <div style={{width:'100%'}}>                
                <div style={{fontSize:'14px', fontWeight:'600',  textAlign:'left', marginTop:'240px'}}>  
                                Course
                </div>
                <div className='dificultadCursoGrid'>
                    <div style={{height:'300px', borderRadius:'20px'}}>
                        <img              
                            src={elemental}
                            alt="Imagen centrada" 
                            className="img-fluid"
                            style={{ objectFit:'cover', width:'100%',  height:'100%',borderRadius:'20px' }}
                        /> 
                        <div style={{fontSize:'14px', fontWeight:'600',  textAlign:'left', marginTop:'20px'}}>  
                                Elementary
                        </div>   
                        
                        <div style={{fontSize:'8px', fontWeight:'400',  textAlign:'left', marginTop:'5px'}}>  
                                For beginners and intermediates
                        </div>       
                    </div>
                    <div style={{height:'300px'}}>
                        
                    <img              
                            src={advanced}
                            alt="Imagen centrada" 
                            className="img-fluid"
                            style={{ objectFit:'cover', width:'100%', height:'100%', borderRadius:'20px'}}
                        />    
                        <div style={{fontSize:'14px', fontWeight:'600',  textAlign:'left', marginTop:'20px'}}>  
                                Advanced
                        </div>
                        
                        <div style={{fontSize:'8px', fontWeight:'400',  textAlign:'left', marginTop:'5px'}}>  
                                For beginners and intermediates
                        </div>       
                    </div>
                   


                </div>
                <div  style={{marginTop:'90px' }}>
                    <div style={{fontSize:'14px', fontWeight:'600',  textAlign:'left', marginTop:'40px', marginBottom:'20px'}}>  
                    Cursos que has realizado
                    </div>
                   
                   

                {Array.isArray(cursosTerminados) && cursosTerminados.map((curso, index) => (
                    <>
                        <div className='cursosTagGrid' key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px',  width:'100%' }}>
                            <div>
                                <img src={curso.imagen} alt={curso.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />     
                            </div>    
                            <div style={{textAlign:'left'}}>
                                
                                <div style={{fontSize:'14px', fontWeight:'400'}}>{curso.name}</div>
                                <div style={{fontSize:'8px', fontWeight:'400'}}> {curso.descripcion}</div>

                            </div>
                            <div  style={{color:'#A2C3FC', fontSize:'10px' }}>
                                    {curso.duracion} min
                            </div>

                        </div>
                    </>
                ))}

                          <div style={{height:'100px'}}></div>          
                    </div>

            
                    <MenuBar />                
            </div>

        </body>    
    </>
  )
}

export default LandingAcademy