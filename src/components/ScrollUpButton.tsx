// En Next.js 13, con "use client", el código será renderizado solo en el cliente
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ScrollUpButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

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

  useEffect(() => {
    if(typeof window !== "undefined") {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    };
  }, []);

  const scrollToTop = () => {
    if(typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  };

  return (
    <>
        <button
          onClick={scrollToTop}
          className={`${showButton ? "opacity-100 translate-y-[0px]" : "opacity-0 translate-y-[30px]"} fixed bottom-15 right-5 py-[15px] lg:py-[20px] px-[18px] lg:px-[23px] z-[50] bg-primary/50 hover:bg-primary text-white rounded-full shadow-lg hover:cursor-pointer trasition-all duration-[.5s] ease-in-out`}
        >
          <Image src="/arrowUp.svg" width={10} height={10} className="w-[10px] md:w-[15px]" alt="Scroll hacia arriba" />
        </button>
    </>
  );
};

export default ScrollUpButton;
