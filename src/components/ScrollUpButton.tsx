// En Next.js 13, con "use client", el código será renderizado solo en el cliente
'use client';

import { useEffect, useState } from 'react';

const ScrollUpButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Función que detecta si el navbar está fuera del viewport
  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const rect = navbar.getBoundingClientRect();
      // Si la parte inferior del navbar está fuera del viewport
      if (rect.bottom < 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  };

  // Añadir el evento de scroll al montar el componente
  useEffect(() => {
    if(typeof window !== "undefined") {
        window.addEventListener('scroll', handleScroll);
    
        // Limpiar el evento cuando el componente se desmonte
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    };
  }, []);

  // Función para volver al inicio de la página
  const scrollToTop = () => {
    if(typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  };

  return (
    <>
      {/* Mostrar el botón solo cuando sea necesario */}
        <button
          onClick={scrollToTop}
          
          className={`${showButton ? "opacity-100" : "opacity-0 translate-y-[300%]"} fixed bottom-15 right-5 py-[20px] px-[23px] z-[50] bg-primary/50 text-white rounded-full shadow-lg hover:cursor-pointer trasition-all duration-[.5s] ease-in-out`}
        >
          <img src="/arrowUp.svg" className="w-[15px]" alt="Scroll hacia arriba" />
        </button>
    </>
  );
};

export default ScrollUpButton;
