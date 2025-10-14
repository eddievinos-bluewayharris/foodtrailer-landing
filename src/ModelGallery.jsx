import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';

// Estilos básicos de Swiper + módulos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ModelGallery({ images = [] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation           // ← flechas izquierda/derecha
      pagination={{ clickable: true }} // ← bullets clicables
      keyboard={{ enabled: true }}     // ← teclas ← →
      loop={images.length > 1}         // ← loop si hay >1 imagen
      style={{ borderRadius: 12 }}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Imagen ${idx + 1}`}
            style={{ width: '100%', borderRadius: 12, display: 'block' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
