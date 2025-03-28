"use client";
import { useState } from "react";
import Image from "next/image";

//TEXTO E IMAGENES DE LAS REVIEWS
const reviews = [
  {
    text: "Bueno.",
    author: "NIcolás GGAleano",
    img: "/cliente1.jpg",
  },
  {
    text: "Maravilloso.",
    author: "Mujer calmada",
    img: "/cliente2.jpg",
  },
  {
    text: "Esplendido",
    author: "Viejo que no come frutas",
    img: "/cliente3.jpg",
  },
];

//FUNCION PARA IR ROTANDO ENTRE REVIEWS

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (newIndex:any) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Temporizador para reiniciar animación
    setTimeout(() => {
      setIndex(newIndex);
      setIsAnimating(false);
    }, 300); // Coincide con la duración de la animación (0.6s)
  };

  const prevReview = () => {
    const newIndex = index === 0 ? reviews.length - 1 : index - 1;
    handleNavigation(newIndex);
  };

  const nextReview = () => {
    const newIndex = index === reviews.length - 1 ? 0 : index + 1;
    handleNavigation(newIndex);
  };

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
          <Image
            src="/banner.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="banner-image"
          />
          <div className="banner-overlay"></div>
          <div className="banner-text fade-in-left">
            <h2>Fruterina</h2>
          </div>
        </section>

        {/* Sección de Tarjetas */}
        <section className="services">
          <h2>Nuestros Servicios</h2>
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
          <h2>Reseñas de nuestros clientes</h2>
          <div className="reviews-container">
            <button className="arrow left" onClick={prevReview}>
              &#9664;
            </button>

              <div className={`review-card ${isAnimating ? 'slide-out' : ''}`}
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
        <p>&copy; 2025 - Luca Stombellini & Marcos Constantino</p>
      </footer>
    </div>
  );
}
