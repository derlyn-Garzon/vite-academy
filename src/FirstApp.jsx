import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import { Nav } from 'react-bootstrap';
import NavReact from './components/NavReact';
import Counter from './components/Counter';
import MensajeTemporal from './components/MensajeTemporal';

const name=["daniel","sara","juan"];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavReact />
      <Nav />
     <h1>Vite academy</h1>
      {
        //map usa llaves en función para hacer return,para mostrar se usan paréntesis
        name.map((item, index)=>(
          
          <Home key={index} name={item} />
        ))//no se usan llaves
      }     
    </>
  )
}

export default App
