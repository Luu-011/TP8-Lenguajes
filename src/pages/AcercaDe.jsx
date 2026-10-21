import React from 'react';
import './AcercaDe.css'; // Importamos el CSS exclusivo de la página

export default function AcercaDe() {
  return (
    <div className="acerca-container">
      <h1 className="acerca-titulo">
        Acerca de Nosotros
      </h1>
      <p className="acerca-descripcion">
        En <strong>Terra Nova</strong> nos especializamos en el desarrollo inmobiliario y la comercialización de terrenos con gran proyección de crecimiento.
      </p>

      <div className="acerca-grid">
        <div className="acerca-card">
          <h3>Nuestra Misión</h3>
          <p>
            Brindar seguridad jurídica y confianza a cada familia e inversor, ofreciendo espacios planificados que aseguran una excelente calidad de vida y revalorización a largo plazo.
          </p>
        </div>
        <div className="acerca-card">
          <h3>Nuestra Visión</h3>
          <p>
            Ser la empresa inmobiliaria líder en el desarrollo de nuevos polos urbanos, destacándonos por la transparencia y el compromiso con nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
}