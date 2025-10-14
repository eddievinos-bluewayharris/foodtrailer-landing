import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ModelGallery({ images = [] }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} style={{ borderRadius: 12 }}>
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
