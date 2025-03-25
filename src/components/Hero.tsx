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
                duration: 2500,
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
                interval: 100
            });
        }
    }, []);
    
    return (
        <div className="w-full h-[87vh]  py-[50px] flex place-items-center place-content-end">
            <div className="lg:w-[550px] lg:pr-[10%] h-[100%] flex flex-col gap-[50px]">
                <h2 className="anim lg:text-3xl font-semibold tracking-tight">
                    Descubre el Mundo del Café
                </h2>
                <p className="anim text-sm text-justify max-w-[450px] tracking-wider leading-6">
                    Desde el suave café con leche hasta el intenso espresso,
                    explora los diferentes tipos de café y encuentra tu
                    favorito. Conoce sus orígenes, preparaciones y cómo pueden
                    hacer tu día mucho mejor
                </p>
                <p className="anim text-lg font-medium text-right max-w-[450px] translate-y-[-20px]">
                    Disfruta cada sorbo, explora cada sabor
                </p>
                <button
                    className="anim lg:w-[160px] bg-primary rounded px-2 py-2 place-self-end hover:cursor-pointer transition-all duration-[.2s] hover:scale-[1.1] hover:bg-primary-light active:scale-[.9]"
                >
                    <Link href="/coffees">Explorar Sabores</Link>
                </button>
            </div>
        </div>
    );
};

export default Hero;