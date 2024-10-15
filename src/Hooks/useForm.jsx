import React, { useState } from 'react'

//user form inicializa con initialState que es un objeto
const useForm = ({ initialState = {} }) => {
 
    //no incluye handle submit razón-> dependiente del formulario es información que usa de forma personalizada
    //al final no siempre hace lo mismo
    const [datosFormulario, setDatosFormulario] = useState({});//recibe un objeto sin definir

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setDatosFormulario({ ...datosFormulario, [e.target.name]: e.target.value });//borre 
    }
    const reset = ()=>{
        setDatosFormulario(initialState);//le asigna el dato inicial
    }

    return [datosFormulario, handleChange, reset]//array
}

export default useForm