import './Footer.css';
import logoTerraNova from '../img/logo.footer.jpeg';

const Footer = ({ cambiarPagina }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <img
            src={logoTerraNova}
            alt="Terra Nova - Venta de Terrenos"
            className="footer-logo-img"
          />
          <p>Desarrollo inmobiliario y venta de terrenos.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><button onClick={() => cambiarPagina('inicio')} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer' }}>Inicio</button></li>
            <li><button onClick={() => cambiarPagina('proyecto')} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer' }}>Proyecto</button></li>
            <li><button onClick={() => cambiarPagina('acerca')} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer' }}>Acerca de nosotros</button></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Terra Nova - Venta de Terrenos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;