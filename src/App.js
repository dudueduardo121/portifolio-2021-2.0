import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Sobre from './components/Sobre/Sobre'
import Experiencia from './components/Experiencia/Experiencia'
import Habilidades from './components/Habilidades/Habilidades'
import Portifolio from './components/Portifolio/Portifolio'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Sobre/>
      <Experiencia/>
      <Habilidades/>
      <Portifolio/>
      <Footer/>
    </div>
  )
}

export default App;
