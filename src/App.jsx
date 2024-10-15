import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import { Nav } from 'react-bootstrap';
import NavReact from './components/NavReact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './components/Explore';
import SeeGoals from './components/SeeGoals';
import MoveOn from './components/MoveOn';
import Login from './components/Login';
import Registro from './components/Registro';
import PhoneVerification from './components/PhoneVerification';
import LandingAcademy from './components/LandingAcademy';

const name=["daniel","sara","juan"];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
        <Routes>
          
          <Route path="/explore" element={<Explore />}/>
          <Route path="/seegoals" element={<SeeGoals/>} />
          <Route path="/moveon" element={<MoveOn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro /> } />
          <Route path="/verificacion" element={<PhoneVerification /> } />
          <Route path="/landing" element={<LandingAcademy /> } />
         
          <Route path="/" element={<Home />} />

          
        </Routes>
      </BrowserRouter>

      {/*<Explore />
      <Home />*/}
      {/*<NavReact />
      <Nav />
      <h1>Vite academy</h1>
      {
        //map usa llaves en función para hacer return,para mostrar se usan paréntesis
        name.map((item, index)=>(
          
          <Home key={index} name={item} />
        ))//no se usan llaves
      }
      */}
    </>
  )
}

export default App
