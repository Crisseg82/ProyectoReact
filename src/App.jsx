import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/header'
import Footer from './componentes/footer/footer'
import Menu from './componentes/navbar/menu'
import Seccion from './componentes/seccion/seccion'
import ListaJuegos from './componentes/Juegos/ListaJuegos'
import './App.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/Juegos" element={<ListaJuegos />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  )
}

export default App
