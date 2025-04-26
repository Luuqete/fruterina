import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Image from 'next/image';

//TEXTO E IMAGENES DE LAS RESEÑAS
const reviews = [
  {
    text: "¡Los mejores productos de la zona! Siempre fresco y a precios increíbles. ¡Recomiendo 100%!",
    author: "Nicolás Vegga",
    img: "/cliente1.jpg",
  },
  {
    text: "Me encanta la variedad y la atención amable. ¡Nunca defraudan!",
    author: "Laura Martínez",
    img: "/cliente2.jpg",
  },
  {
    text: "Calidad de siempre, como antes. ¡La verdulería de confianza del barrio!",
    author: "Manuel Hernandez",
    img: "/cliente3.jpg",
  },
];

//FUNCION PARA IR ROTANDO ENTRE REVIEWS

const Reviews_section: React.FC = () => {

      const [index, setIndex] = useState(0);
      const [direction, setDirection] = useState<'left' | 'right'>('right');
      const [isAnimating, setIsAnimating] = useState(false);
    
      const handleNavigation = (newIndex:any, newDirection : 'left'|'right') => {
        if (isAnimating) return;
        setIsAnimating(true);
    
        setDirection(newDirection);
    
        setIndex(newIndex);
    
        setTimeout(() => {
          
          setIsAnimating(false);
        }, 500); 
      };
      const prevReview = () => {
        const newIndex = index === 0 ? reviews.length - 1 : index - 1;
        handleNavigation(newIndex,'left');
      };
    
      const nextReview = () => {
        const newIndex = index === reviews.length - 1 ? 0 : index + 1;
        handleNavigation(newIndex,'right');
      };
    return (
        <section className="reviews">

          <h2 className="section-title reviews-title">Reseñas de nuestros clientes</h2>
          <div className="reviews-container">
            <button className="arrow left" onClick={prevReview}>
              &#9664;
            </button>

              <div className={`review-card ${isAnimating ? `slide-in-${direction}` : ''}`}
        key={index}>
                <div className="review-image-container">
                  <Image
                    src={reviews[index].img}
                    alt={reviews[index].author}
                    width={150}
                    height={150}
                    className="review-image"
                  />
                </div>
                <div className="review-text">
                  <p>"{reviews[index].text}"</p>
                  <p className="review-author">- {reviews[index].author}</p>
                </div>
              </div>

            <button className="arrow right" onClick={nextReview}>
              &#9654;
            </button>
          </div>
        </section>
    );
};

export default Reviews_section;