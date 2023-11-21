// Carousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import image1 from './imagesCarousel/carousel1.jpg';
import image2 from './imagesCarousel/carousel2.jpeg'; // Importe a segunda imagem
import image3 from './imagesCarousel/carousel3.jpg'; // Importe a terceira imagem

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <h3>GARANTIMOS </h3>
          <p> acesso e oportunidade para todos independente de suas diferenças</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <h3>MUDAMOS VIDAS A CADA DIA  </h3>
          <p>buscamos um mundo melhor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <h3>RECONHECEMOS</h3>
          <p> a dignidade e valor de cada pessoa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
