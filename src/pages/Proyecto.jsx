import React from 'react';
import './Proyecto.css'; // Importamos su CSS exclusivo

import imgAlamos from '../img/Proyecto1-Alamos.jpg';
import imgGranVista from '../img/Proyecto2-GranVista.jpg';
import imgTerraAlta from '../img/Proyecto3-TerraAlta.jpg';

export default function Proyecto() {
  const terrenos = [
    { 
      id: 1, 
      titulo: 'Loteo Los Álamos', 
      superficie: '300 m²', 
      estado: 'Disponible', 
      imagen: imgAlamos 
    },
    { 
      id: 2, 
      titulo: 'Gran Vista Residencial', 
      superficie: '450 m²', 
      estado: 'Últimos disponibles', 
      imagen: imgGranVista 
    },
    { 
      id: 3, 
      titulo: 'Terra Alta', 
      superficie: '600 m²', 
      estado: 'Preventa', 
      imagen: imgTerraAlta 
    },
  ];

  return (
    <div className="proyecto-container">
      <div className="proyecto-header">
        <h1>Nuestros Proyectos</h1>
        <p>Conoce los loteos y desarrollos urbanísticos que tenemos disponibles.</p>
      </div>

      <div className="proyecto-grid">
        {terrenos.map((lote) => (
          <div key={lote.id} className="tarjeta-lote">
            <div className="contenedor-imagen">
              <img src={lote.imagen} alt={lote.titulo} className="lote-img" />
            </div>
            <div className="contenido-lote">
              <h3>{lote.titulo}</h3>
              <p><strong>Superficie:</strong> {lote.superficie}</p>
              <p><strong>Estado:</strong> <span className="estado-badge">{lote.estado}</span></p>
              <button className="btn-detalles">
                Ver más detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}