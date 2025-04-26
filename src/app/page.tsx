"use client";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

import MiSeccion from "./reviews_seccion";
import ChangeThemeButton from "./changeThemeButton";

export default function Page() {


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
        <div className="header--sub-section">
          <h1 className="text-2xl font-bold">
              <a href="#">Fruterina</a>
            </h1>
            <nav className="header--nav">
              <a href="#start" className="hover:underline">Inicio</a>
              <a href="#services" className="hover:underline">Servicios</a>
              <a href="#contact" className="hover:underline">Contacto</a>
              
            </nav>
        </div>
        <div className="header--change-theme"><ChangeThemeButton/></div>
      </header>

      {/* Contenido principal */}
      <main className="main-content" id="start">
        {/* Banner */}
        <section className="banner">
           <img
            src="/banner.jpg"
            className={`banner-image ${move ? 'moved' : ''}`}
            alt="Banner"    
          /> 
          <div className="banner-overlay"></div>
          <div className="banner-text fade-in-left">
            <h2 className="main-title">Fruterina</h2>
          </div>
        </section>

        {/* Sección de Tarjetas */}
        <section className="services" id="services">
          
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-container">
            <div className="service-card">
                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      className="service-icon fill" viewBox="0 0 136.000000 135.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
                      fill="current-color" stroke="none">
                      <path d="M438 1247 c-15 -12 -32 -34 -37 -49 l-11 -28 135 0 c83 0 135 4 135
                      10 0 6 -13 10 -30 10 -19 0 -30 5 -30 14 0 8 -14 26 -31 40 -39 33 -93 35
                      -131 3z"/>
                      <path d="M410 1130 c0 -36 44 -70 90 -70 46 0 90 34 90 70 0 19 -6 20 -90 20
                      -84 0 -90 -1 -90 -20z"/>
                      <path d="M437 982 c-27 -28 -27 -30 -27 -171 0 -137 1 -143 25 -166 23 -24 30
                      -25 139 -25 63 0 121 -3 130 -6 13 -5 16 -26 16 -128 0 -129 5 -146 46 -146
                      41 0 46 20 42 164 -3 133 -4 136 -31 163 -24 25 -37 29 -105 33 l-77 5 -3 88
                      c-1 48 0 87 3 87 3 0 32 -13 65 -30 65 -33 101 -38 120 -15 30 36 -14 69 -194
                      146 -86 37 -115 37 -149 1z"/>
                      <path d="M50 780 l0 -160 150 0 150 0 0 160 0 160 -150 0 -150 0 0 -160z m99
                      73 c1 29 2 30 25 21 21 -8 22 -77 1 -94 -10 -8 -15 -31 -15 -71 0 -46 -3 -59
                      -15 -59 -12 0 -15 13 -15 59 0 40 -5 63 -15 71 -9 7 -15 29 -15 51 0 42 16 53
                      23 17 3 -17 5 -13 7 12 l3 35 7 -35 c7 -31 7 -32 9 -7z m132 12 c1 -14 2 -32
                      2 -40 0 -147 -4 -175 -19 -175 -14 0 -16 7 -11 45 4 25 2 47 -3 50 -14 9 -12
                      119 2 133 19 19 28 14 29 -13z"/>
                      <path d="M803 840 l-11 -30 39 0 c46 0 56 -15 94 -145 42 -145 30 -229 -42
                      -297 -36 -35 -73 -48 -132 -48 -72 0 -139 27 -162 64 -24 40 -24 57 2 89 15
                      20 19 38 17 69 l-3 43 -298 3 c-269 2 -298 1 -304 -14 -15 -39 9 -49 128 -54
                      l114 -5 -43 -19 c-48 -22 -91 -66 -111 -114 -17 -40 -9 -62 22 -62 23 0 23 -3
                      19 -55 -5 -67 9 -105 54 -145 74 -64 163 -61 233 9 36 36 51 73 51 125 l0 22
                      98 -14 c53 -7 138 -12 187 -10 108 5 151 24 239 105 44 41 61 51 67 41 5 -8 0
                      -22 -16 -38 -79 -83 -54 -215 52 -266 62 -31 105 -27 165 12 48 31 72 76 72
                      139 1 96 -56 156 -154 163 -42 3 -60 8 -60 18 0 23 97 21 143 -3 16 -8 31 -13
                      33 -10 8 8 -75 76 -123 101 -32 16 -69 49 -108 97 -93 113 -114 152 -75 142
                      18 -5 20 0 20 51 0 61 -1 62 -50 45 -28 -10 -34 -9 -42 5 -6 11 -23 16 -56 16
                      -44 0 -49 -2 -59 -30z m407 -495 c74 -38 91 -111 39 -170 -28 -31 -36 -35 -81
                      -35 -43 0 -54 4 -79 31 -31 33 -39 91 -19 130 16 30 28 23 51 -30 23 -55 41
                      -68 63 -45 16 15 12 33 -18 93 -22 42 -6 52 44 26z m-868 -51 c45 -5 59 -10
                      64 -26 9 -28 -2 -62 -32 -97 -22 -26 -33 -31 -71 -31 -55 0 -78 12 -98 50 -18
                      34 -19 73 -4 101 9 17 17 19 47 15 20 -3 63 -8 94 -12z"/>
                      </g>
                  </svg>

              <h3>Delivery sin cargo</h3>
              <p>Para clientes dentro de la zona de reparto.</p>
              <button className="service-button">Conocer más</button>
            </div>
            <div className="service-card">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                className="service-icon fill" viewBox="0 0 136.000000 136.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
                fill="#none" stroke="none">
                <path d="M1167 1183 c-8 -21 -18 -56 -20 -78 -5 -44 -73 -162 -137 -237 -58
                -68 -182 -145 -367 -229 l-31 -14 32 -38 33 -37 49 49 c39 39 58 50 94 56 41
                6 99 -2 143 -20 26 -11 22 31 -8 83 -14 24 -22 48 -19 53 11 19 35 8 50 -24
                l16 -33 52 51 c47 45 53 57 59 104 7 59 56 173 89 209 12 12 30 22 39 22 19 0
                40 53 31 78 -5 15 -54 42 -75 42 -8 0 -21 -17 -30 -37z"/>
                <path d="M1102 1157 c-6 -12 -13 -34 -16 -50 -4 -15 -40 -65 -81 -111 -56 -63
                -90 -91 -143 -119 -143 -75 -381 -134 -642 -158 -74 -7 -147 -18 -162 -26 -38
                -18 -38 -64 -1 -99 91 -84 148 -84 233 2 30 31 73 65 95 77 50 26 123 27 160
                3 18 -12 36 -15 53 -11 33 8 222 102 243 121 8 8 20 14 26 14 5 0 40 27 75 60
                84 76 160 196 169 265 8 58 6 63 -9 32z"/>
                <path d="M1047 1154 c-4 -4 -7 -15 -7 -25 0 -19 -123 -130 -172 -155 -124 -64
                -298 -88 -590 -81 -202 4 -218 3 -234 -14 -23 -25 -12 -60 30 -97 34 -30 37
                -31 118 -26 252 15 591 103 698 183 52 38 137 131 155 169 16 32 17 61 2 46z"/>
                <path d="M1156 795 c-21 -7 -44 -19 -50 -25 -8 -10 -6 -10 11 -1 12 6 48 18
                80 25 40 10 49 14 28 15 -16 0 -47 -6 -69 -14z"/>
                <path d="M1200 766 c-55 -16 -140 -55 -140 -66 0 -13 84 -19 129 -9 50 11 84
                28 126 63 l30 25 -50 0 c-27 -1 -70 -6 -95 -13z"/>
                <path d="M1020 656 c0 -23 2 -24 30 -15 36 13 38 24 8 33 -35 9 -38 8 -38 -18z"/>
                <path d="M424 659 c-16 -5 -48 -25 -70 -44 l-39 -36 50 33 c56 37 68 41 109
                41 108 -2 131 -134 50 -283 -14 -25 -18 -38 -9 -29 25 24 75 157 75 198 0 39
                -29 94 -57 109 -30 16 -76 21 -109 11z"/>
                <path d="M418 544 c-21 -41 -35 -74 -33 -74 6 0 68 37 122 74 18 11 33 26 33
                32 0 19 -35 44 -61 43 -20 0 -31 -14 -61 -75z"/>
                <path d="M794 605 c-35 -16 -71 -56 -80 -89 -3 -12 2 -41 11 -65 8 -25 15 -77
                15 -122 0 -74 2 -80 32 -114 56 -64 86 -73 233 -71 123 2 132 3 173 29 143 92
                162 352 32 426 -47 26 -95 27 -161 1 l-51 -21 -55 21 c-62 23 -104 24 -149 5z
                m449 -172 c0 -80 -19 -140 -60 -190 -26 -32 -84 -73 -94 -67 -5 3 10 20 33 37
                24 18 55 55 70 82 24 44 28 61 28 145 0 72 3 91 12 82 7 -7 11 -42 11 -89z"/>
                <path d="M388 594 c-22 -12 -28 -22 -28 -49 0 -19 4 -35 8 -35 5 0 21 23 36
                50 29 53 27 58 -16 34z"/>
                <path d="M620 539 c0 -81 -77 -244 -148 -314 -50 -50 -117 -85 -164 -86 l-33
                -1 42 -19 c139 -64 313 -9 374 118 41 85 25 197 -45 299 l-26 39 0 -36z"/>
                <path d="M269 533 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>
                <path d="M317 535 c-17 -17 -17 -18 4 -41 12 -13 23 -23 25 -21 1 1 -1 20 -5
                41 -6 38 -7 39 -24 21z"/>
                <path d="M476 495 c-75 -47 -74 -51 14 -58 33 -2 34 -1 46 51 6 28 11 52 10
                52 0 0 -32 -20 -70 -45z"/>
                <path d="M155 485 c-86 -24 -107 -74 -54 -128 l31 -31 18 52 c10 29 28 68 40
                87 12 19 20 35 18 34 -2 0 -25 -7 -53 -14z"/>
                <path d="M266 475 c-22 -34 -21 -36 23 -33 l40 2 -20 28 c-11 15 -22 28 -24
                28 -1 0 -10 -11 -19 -25z"/>
                <path d="M345 440 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
                -8 -4 -11 -10z"/>
                <path d="M390 403 c27 -87 34 -103 44 -100 6 2 26 25 44 52 38 56 36 59 -45
                70 l-52 7 9 -29z"/>
                <path d="M215 388 c-7 -18 -12 -34 -11 -36 2 -1 29 13 61 33 l59 35 -48 0
                c-44 0 -48 -2 -61 -32z"/>
                <path d="M248 352 c-51 -33 -58 -41 -58 -69 0 -18 5 -33 11 -33 5 0 7 -5 3
                -12 -4 -7 -3 -8 4 -4 7 4 12 14 12 22 0 8 5 14 12 14 6 0 8 3 5 7 -4 4 3 18
                17 32 23 26 62 82 55 80 -2 0 -30 -17 -61 -37z"/>
                <path d="M357 365 c-4 -16 -11 -58 -15 -92 l-9 -62 39 27 c42 30 43 40 9 117
                l-18 40 -6 -30z"/>
                <path d="M261 273 c-45 -68 -44 -83 4 -83 34 0 44 14 53 75 16 97 4 99 -57 8z"/>
                <path d="M440 257 c-55 -62 -55 -62 -12 -29 23 19 42 38 42 42 0 5 10 18 22
                30 12 11 18 20 12 20 -5 0 -34 -28 -64 -63z"/>
                </g>
                </svg>

              <h3>Packs de smoothies</h3>
              <p>Una selección de las mejores frutas congeladas ¡listas para tu licuado!.</p>
              <button className="service-button">Conocer más</button>
            </div>
            <div className="service-card">
            <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              <h3>Métodos de pago varios</h3>
              <p>Podés pagar con todas las billeteras virtuales. Pagando en efectivo, te hacemos 10% de descuento</p>
              
              <button className="service-button">Conocer más</button>
            </div>
          </div>
        </section>

        {/* Sección de Reseñas */}
        <MiSeccion />
        {/* Imagen Final */}
     
        <section className="contact" id="contact">
          <div className="contact-overlay"></div>
          
          {/* <Image
            src="/imagen-final.jpg"
            alt="Imagen final"
            layout="fill"
            objectFit="cover"
            className="contact-background"
          /> */}
          
          <div className="final-text">
            <h2>¡Comunicate con nosotros!</h2>
            <ul className="final-text-social-media-links">
              <li>
                <a href="#contact">
                <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="social-media-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path></svg>
                </div>
                </a>
                </li>
              <li>
                  <a href="#contact">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram social-media-icon"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </div>
                  </a>
                </li>
              <li>
                <a href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" className="social-media-icon fill" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                  </a>
                  </li>
              <li>
                <a href="#contact">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 772.51629 772.51628"
                      className="social-media-icon"
                    >
                      <g transform="translate(-68.027863,-23.250854)">
                        <path
                          d="m 454.278,160.51201 c -99.484,0 -179.81,80.41 -179.81,179.59 0,31.186 7.9688,60.528 21.938,86.094 l 157.88,264.31 157.88,-264.31 c 13.969,-25.566 21.938,-54.908 21.938,-86.094 0,-99.184 -80.328,-179.59 -179.81,-179.59 z m -2,104.37 c 0.6674,-0.0169 1.3285,0 2,0 42.975,0 77.812,34.838 77.812,77.813 0,42.975 -34.838,77.812 -77.812,77.812 -42.975,0 -77.812,-34.838 -77.812,-77.812 0,-42.303 33.766,-76.747 75.812,-77.813 z"
                          fill="currentColor"
                          stroke="none"
                        />
                        <circle
                          cx="454.28601"
                          cy="409.509"
                          r="368.75815"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="35"
                        />
                      </g>
                    </svg>

                  </a>
                  </li>
            </ul>
          </div>
          
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="footer">
        <section className="footer-links-container">
          <div className="footer-social-media-liks"></div>
          <ul className="footer-links-list">
            <li><a className="footer-link hover:underline" href="#footer">Términos y condicones</a></li>
            <li><a className="footer-link hover:underline" href="#footer">Política de privacidad</a></li>
            <li><a className="footer-link hover:underline" href="#footer">Política de Devoluciones</a></li>
          </ul>
        </section>
        <p>&copy; 2025 - Luca Stombellini & Marcos Constantino</p>
      </footer>
    </div>
  );
}
