import React from 'react';
import './Header.css';
import logoHeader from '../img/logo.header.jpeg';

export default function Header({ cambiarPagina }) {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-logo">
          <button 
            onClick={() => cambiarPagina('inicio')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img
              src={logoHeader}
              alt="Terra Nova - Venta de Terrenos"
              className="logo-img"
            />
          </button>
        </div>

        <nav className="header-nav">
          <ul className="nav-list" style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li>
              <button onClick={() => cambiarPagina('inicio')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => cambiarPagina('proyecto')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Proyecto
              </button>
            </li>
            <li>
              <button onClick={() => cambiarPagina('acerca')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Acerca de nosotros
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-action" onClick={() => cambiarPagina('proyecto')}>
            Hacer Click
          </button>
        </div>
      </div>
    </header>
  );
}