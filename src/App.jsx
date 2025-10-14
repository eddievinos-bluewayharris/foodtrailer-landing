import React from 'react';

export default function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: '2rem', textAlign: 'center'}}>
      <h1>🚚 Blueway Harris Food Trailers</h1>
      <p>
        Fabricamos y enviamos food trailers listos para trabajar en todo EE. UU.<br />
        Equipados, certificados y diseñados para que empieces a generar ingresos desde el primer día.
      </p>

      {/* Botón de WhatsApp con tu número real */}
      <a href="https://wa.me/+528141287555" target="_blank" rel="noreferrer">
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#1E90FF',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          📲 Contáctanos por WhatsApp
        </button>
      </a>

      {/* Imagen opcional de tu trailer */}
      <div style={{marginTop: '30px'}}>
        <img 
          src="https://via.placeholder.com/600x350.png?text=Tu+Food+Trailer" 
          alt="Modelo de Food Trailer" 
          style={{width: '80%', borderRadius: '10px'}}
        />
      </div>
    </div>
  );
}