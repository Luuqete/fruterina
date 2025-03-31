"use client";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

//TEXTO E IMAGENES DE LAS REVIEWS
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

export default function ReviewsSection() {
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

  const [move, setMove] = useState(false);
  const MoverImagenScroll = () => {


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
            const porcentajeScroll = (scrollTop / alturaTotal) * 100;

            setMove(porcentajeScroll > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll); // Limpieza del evento
    }, []);

  };

MoverImagenScroll();

  //ACA TERMINA EL JAVASCRIPT. HTML TIME 

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h1>Header</h1>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Banner */}
        <section className="banner">
           <img
            src="/banner.jpg"
            className={`banner-image ${move ? 'moved' : ''}`}
            alt="Banner"    
          /> 
          <div className="banner-overlay"></div>
          <div className="banner-text fade-in-left">
            <h2>Fruterina</h2>
          </div>
        </section>

        {/* Sección de Tarjetas */}
        <section className="services">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-container">
            <div className="service-card">
              <h3>Servicio 1</h3>
              <p>Descripción breve del servicio.</p>
            </div>
            <div className="service-card">
              <h3>Servicio 2</h3>
              <p>Descripción breve del servicio.</p>
            </div>
            <div className="service-card">
              <h3>Servicio 3</h3>
              <p>Descripción breve del servicio.</p>
            </div>
          </div>
        </section>

        {/* Sección de Reseñas */}
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
        {/* Imagen Final */}
        <section className="final-image">
          <div className="final-image-overlay"></div>
          {/* <Image
            src="/imagen-final.jpg"
            alt="Imagen final"
            layout="fill"
            objectFit="cover"
            className="final-image-background"
          /> */}
          
          <div className="final-text">
            <h2>¡Gracias por visitarnos!</h2>
            
          </div>
          
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <section className="footer-links-container">
          <div className="footer-social-media-liks"></div>
          <ul className="footer-links-list">
            <li><a href="#">Términos y condicones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Política de Devoluciones</a></li>
          </ul>
        </section>
        <p>&copy; 2025 - Luca Stombellini & Marcos Constantino</p>
      </footer>
    </div>
  );
}
