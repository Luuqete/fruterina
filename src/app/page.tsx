import Image from "next/image";
import "./globals.css";

export default function Home() {
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
          <div className="banner-text">
            <h2>Bienvenido a nuestra página</h2>
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
            <div className="review-card">
              <p>"Excelente servicio y atención."</p>
              <p className="review-author">- Cliente 1</p>
            </div>
            <div className="review-card">
              <p>"Totalmente recomendado."</p>
              <p className="review-author">- Cliente 2</p>
            </div>
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
