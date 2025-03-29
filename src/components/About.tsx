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
        <h3 className="top text-center text-xl sm:text-[32px] font-semibold">Sobre Nosotros</h3>
        <div className="flex flex-col lg:flex-row place-items-center place-content-center gap-[20px] sm:gap-[50px] lg:gap-[100px]">
            <p className="left w-[300px] sm:w-[500px] text-[14px] sm:text-[18px] sm:leading-[30px] lg:leading-[40px] text-justify lg:tracking-wide">JustCoffee nació para los verdaderos amantes del café. Nuestro objetivo es brindar toda la información sobre los diferentes tipos de café, sus orígenes y cómo preparar la taza perfecta. Porque creemos que cada sorbo cuenta una historia única.</p>
            <img src="/Logo.png" className="right w-[100px] sm:w-[150px] lg:w-[300px]" alt="Just-Coffee" />
        </div>
    </div>
  )
};

export default About;