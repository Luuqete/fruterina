import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="header">
        <h1>Mi Página</h1>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow p-4">
        <p>Bienvenido a mi página con Next.js y Tailwind CSS.</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 - Mi Sitio</p>
      </footer>
    </div>
  );
}

