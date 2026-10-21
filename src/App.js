import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Proyecto from './pages/Proyecto';
import AcercaDe from './pages/AcercaDe';
import './App.css';

export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  // Función para decidir qué componente mostrar en el centro
  const renderizarPagina = () => {
    switch (paginaActual) {
      case 'inicio':
        return <Inicio />;
      case 'proyecto':
        return <Proyecto />;
      case 'acerca':
        return <AcercaDe />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header cambiarPagina={setPaginaActual} />
      
      <main style={{ flex: 1 }}>
        {renderizarPagina()}
      </main>

      <Footer cambiarPagina={setPaginaActual} />
    </div>
  );
}