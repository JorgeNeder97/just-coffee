"use client";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


const Hero = () => {

    useEffect(() => {
        // Esto sirve para que scrollreveal espere a que el objeto window esté definido
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: 'right',
                duration: 2000,
                distance: '60px',
                delay: 50,
                beforeReveal(domEl) {
                    if (domEl instanceof HTMLElement) {
                        domEl.style.transform = '';
                    }
                },
                reset: false,
            });

            sr.reveal('.anim', {
                interval: 200
            });
        }
    }, []);
    
    return (
        <div className="w-full h-[calc(100vh-80px)] py-[50px] flex flex-col lg:flex-row place-items-center place-content-center lg:place-content-end">
            <div className="w-full lg:w-[550px] lg:pr-[7vw] h-[100%] flex flex-col place-content-center place-items-center lg:place-content-start lg:place-items-end gap-[45px] lg:gap-[50px]">
                <h2 className="anim text-xl sm:text-3xl font-semibold tracking-tight lg:tracking-[-.5px]">
                    Descubre el Mundo del Café
                </h2>
                <p className="anim text-sm text-justify w-[80vw] max-w-[360px] sm:max-w-[410px] lg:w-[450px] tracking-wider leading-6">
                    Desde el suave café con leche hasta el intenso espresso,
                    explora los diferentes tipos de café y encuentra tu
                    favorito. Conoce sus orígenes, preparaciones y cómo pueden
                    hacer tu día mucho mejor
                </p>
                <p className="anim text-lg font-medium text-center lg:text-right w-[80vw] lg:w-[450px] translate-y-[-20px]">
                    Disfruta cada sorbo, explora cada sabor
                </p>
                <button
                    className="anim lg:w-[160px] bg-primary rounded px-2 py-2 lg:place-self-end hover:cursor-pointer transition-all duration-[.2s] hover:scale-[1.1] hover:bg-primary-light active:scale-[.9]"
                >
                    <Link href="/coffees">Explorar Sabores</Link>
                </button>
            </div>
        </div>
    );
};

export default Hero;