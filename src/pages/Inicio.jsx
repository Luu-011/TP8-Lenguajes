import React, { useState } from 'react';
import './Inicio.css'; 

export default function Inicio() {
  const [blobActual, setBlobActual] = useState(null);
  const [resultado, setResultado] = useState('');

  const manejarCrearBlob = () => {
    const texto = 'Información del loteo Terra Nova: Lotes disponibles con escritura inmediata en Salta.';
    const nuevoBlob = new Blob([texto], { type: 'text/plain' });

    setBlobActual(nuevoBlob);
    setResultado(
      `Archivo de loteo generado correctamente.\n` +
      `Tipo: ${nuevoBlob.type}\n` +
      `Tamaño: ${nuevoBlob.size} bytes\n\n` +
      `Contenido:\n${texto}`
    );
  };

  const manejarDescargarBlob = () => {
    if (!blobActual) {
      setResultado('Primero haz clic en "Generar información" para crear el archivo.');
      return;
    }

    const url = URL.createObjectURL(blobActual);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'terra-nova-info.txt';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);

    setResultado('El archivo se descargó como "terra-nova-info.txt".');
  };

  return (
    <div className="inicio-container">
      <section className="inicio-bienvenida">
        <h1>Bienvenidos a Terra Nova</h1>
        <p>
          Encontramos el lugar ideal para tu próximo hogar o inversión inmobiliaria. Descubre nuestros terrenos exclusivos.
        </p>
      </section>

      <div className="panel-blobs">
        <h3>Zona de Descarga de Folletos (Demo Blobs)</h3>
        <div className="contenedor-botones-inicio">
          <button onClick={manejarCrearBlob} className="boton-verde">
            Generar Info de Loteo
          </button>
          <button onClick={manejarDescargarBlob} className="boton-verde">
            Descargar Folleto (.txt)
          </button>
        </div>

        <pre className="area-resultado-inicio">
          {resultado || 'Haz clic en los botones para probar la generación de archivos...'}
        </pre>
      </div>
    </div>
  );
}