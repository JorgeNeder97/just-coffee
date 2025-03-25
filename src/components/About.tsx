"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


const About = () => {

    useEffect(() => {
        // Esto sirve para que scrollreveal espere a que el objeto window esté definido
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: 'right',
                duration: 2500,
                distance: '60px',
                delay: 0,
                beforeReveal(domEl) {
                    if (domEl instanceof HTMLElement) {
                        domEl.style.transform = '';
                    }
                },
                reset: false,
            });

            sr.reveal('.top', {
                origin: 'top',
            });
            sr.reveal('.left', {
                origin: 'left',
                delay: 500,
            });
            sr.reveal('.right', {
                delay: 500,
            });
        }
    }, []);

  return (
    <div className="w-full flex flex-col place-items-center place-content-center gap-[50px] py-[100px]">
        <h3 className="top text-center lg:text-[32px]">Sobre Nosotros</h3>
        <div className="flex place-items-center place-content-center lg:gap-[100px]">
            <p className="left lg:w-[500px] lg:text-[18px] lg:leading-[40px] text-justify lg:tracking-wide">JustCoffee nació para los verdaderos amantes del café. Nuestro objetivo es brindar toda la información sobre los diferentes tipos de café, sus orígenes y cómo preparar la taza perfecta. Porque creemos que cada sorbo cuenta una historia única.</p>
            <img src="/Logo.png" className="right lg:w-[300px]" alt="Just-Coffee" />
        </div>
    </div>
  )
};

export default About;