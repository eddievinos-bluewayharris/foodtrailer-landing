import React from 'react';
import ModelGallery from './ModelGallery';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#1d3557' }}>Blueway Harris Food Trailers</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Elige el modelo que más se adapte a tu visión de negocio 🚀
      </p>

      {/* 📸 MODELO CHICO */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Modelo Chico — 8 ft. x 12 ft.</h2>
        <p>Precio: <strong>$18,699 USD</strong></p>
        <ModelGallery
          images={[
            '/images/8x12/1.jpg',
            '/images/8x12/2.jpg',
            '/images/8x12/3.jpg'
          ]}
        />
      </section>

      {/* 📸 MODELO MEDIANO */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Modelo Mediano — 8 ft. x 16 ft.</h2>
        <p>Precio: <strong>$23,399 USD</strong></p>
        <ModelGallery
          images={[
            '/images/8x16/1.jpg',
            '/images/8x16/2.jpg',
            '/images/8x16/3.jpg'
          ]}
        />
      </section>

      {/* 📸 MODELO GRANDE */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Modelo Grande — 8 ft. x 20 ft.</h2>
        <p>Precio: <strong>$27,899 USD</strong></p>
        <ModelGallery
          images={[
            '/images/8x20/1.jpg',
            '/images/8x20/2.jpg',
            '/images/8x20/3.jpg'
          ]}
        />
      </section>

      {/* 📊 COMPARADOR DE MODELOS */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center' }}>Comparación de Modelos</h2>
        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr style={{ backgroundColor: '#457b9d', color: '#fff' }}>
                <th>Característica</th>
                <th>Chico (8x12)</th>
                <th>Mediano (8x16)</th>
                <th>Grande (8x20)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Precio</td>
                <td>$18,699</td>
                <td>$23,399</td>
                <td>$27,899</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tamaño</td>
                <td>8 x 12 ft</td>
                <td>8 x 16 ft</td>
                <td>8 x 20 ft</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Configuración</td>
                <td>Básica</td>
                <td>Intermedia</td>
                <td>Comercial completa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📞 BOTONES DE CONTACTO */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '3rem' }}>
        <a href="https://wa.me/528141287555" target="_blank" rel="noopener noreferrer">
          <button style={{ background: '#25d366', color: '#fff', padding: '12px 18px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            💬 Contáctanos por WhatsApp
          </button>
        </a>
        <a href="tel:+1509600332">
          <button style={{ background: '#007bff', color: '#fff', padding: '12px 18px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            📞 Llamar ahora
          </button>
        </a>
      </div>
    </div>
  );
}
