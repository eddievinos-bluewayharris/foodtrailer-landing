import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', textAlign: 'center' }}>
      {/* Encabezado */}
      <h1>🚚 Blueway Harris Food Trailers</h1>
      <p>
        Fabricamos y enviamos food trailers listos para trabajar en todo EE. UU.
        <br />
        Equipados, certificados y diseñados para que empieces a generar ingresos desde el primer día.
      </p>

      {/* Botón WhatsApp principal */}
      <a
        href="https://wa.me/528141287555?text=Hola%20me%20interesa%20un%20food%20trailer"
        target="_blank"
        rel="noreferrer"
      >
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#1E90FF',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            marginTop: '20px',
          }}
        >
          📲 Contáctanos por WhatsApp
        </button>
      </a>

      {/* === Catálogo de modelos === */}
      <section style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Nuestros Modelos</h2>
        <p style={{ color: '#555', marginBottom: '20px' }}>
          Medidas estándar y opción totalmente personalizable.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Modelo chico */}
          <div
            style={{
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
            }}
          >
            <img
              src="/images/modelo-8x12.jpg"
              alt="Modelo 8x12"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '10px' }}>Modelo 8 ft × 12 ft</h3>
            <p>Compacto y funcional. Ideal para iniciar.</p>
            <p>
              <strong>Desde $18,699 USD</strong>
            </p>
            <a
              href="https://wa.me/528141287555?text=Hola%20me%20interesa%20el%20modelo%208x12%20(8ft%20x%2012ft)"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  background: '#1E90FF',
                  color: '#fff',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                📲 Cotizar por WhatsApp
              </button>
            </a>
          </div>

          {/* Modelo mediano */}
          <div
            style={{
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
            }}
          >
            <img
              src="/images/modelo-8x16.jpg"
              alt="Modelo 8x16"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '10px' }}>Modelo 8 ft × 16 ft</h3>
            <p>Más espacio para línea de equipos y prep.</p>
            <p>
              <strong>Desde $23,399 USD</strong>
            </p>
            <a
              href="https://wa.me/528141287555?text=Hola%20me%20interesa%20el%20modelo%208x16%20(8ft%20x%2016ft)"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  background: '#1E90FF',
                  color: '#fff',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                📲 Cotizar por WhatsApp
              </button>
            </a>
          </div>

          {/* Modelo grande */}
          <div
            style={{
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
            }}
          >
            <img
              src="/images/modelo-8x20.jpg"
              alt="Modelo 8x20"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '10px' }}>Modelo 8 ft × 20 ft</h3>
            <p>Capacidad para operar a volumen alto.</p>
            <p>
              <strong>Desde $27,899 USD</strong>
            </p>
            <a
              href="https://wa.me/528141287555?text=Hola%20me%20interesa%20el%20modelo%208x20%20(8ft%20x%2020ft)"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  background: '#1E90FF',
                  color: '#fff',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                📲 Cotizar por WhatsApp
              </button>
            </a>
          </div>

          {/* Configuración personalizada */}
          <div
            style={{
              width: '300px',
              border: '2px dashed #999',
              borderRadius: '10px',
              padding: '1rem',
              background: '#fafafa',
            }}
          >
            <img
              src="/images/personalizado.jpg"
              alt="Modelo personalizado"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '10px' }}>A la medida</h3>
            <p>
              Configuración totalmente personalizada por el cliente, con medidas hasta{' '}
              <strong>36 ft de largo</strong> y <strong>8.5 ft de ancho</strong>.
            </p>
            <a
              href="https://wa.me/528141287555?text=Hola%20quiero%20una%20configuraci%C3%B3n%20personalizada%20(hasta%2036ft%20x%208.5ft)"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  background: '#111',
                  color: '#fff',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                ✍️ Diseñar mi trailer
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Botón para llamadas (dentro del mismo contenedor) */}
      <div style={{ marginTop: '24px' }}>
        <a href="tel:+1509600332">
          <button
            style={{
              background: '#28a745',
              color: '#fff',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            📞 Llamar ahora
          </button>
        </a>
      </div>
    </div>
  );
}
