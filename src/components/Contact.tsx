"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Contact = () => {

    useEffect(() => {
        // Esto sirve para que scrollreveal espere a que el objeto window esté definido
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: 'top',
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

            sr.reveal(".fromTop");
            sr.reveal(".contactRight", {
                origin: "right",
                interval: 300,
                delay: 1000,
            });
            sr.reveal(".contactLeft", {
                origin: "left",
                interval: 150,
                delay: 50,
            });
        }
    }, []);

    return (
        <div className="w-full flex flex-col gap-[150px] place-items-center place-content-center pt-[100px] pb-[100px] px-[30px] lg:px-[100px]">
            <h3 className="fromTop lg:text-[32px] font-semibold">Contactanos</h3>
            <div className="w-full flex place-items-center place-content-center gap-[30px]">
                <div className="w-full lg:w-[900px] flex flex-col place-items-start gap-[30px]">
                    <div className="flex flex-col gap-[15px]">
                        <p className="contactLeft lg:text-[14px]"><strong>Correo:</strong> contacto@justcoffee.com</p>
                        <p className="contactLeft lg:text-[14px]"><strong>Teléfono:</strong> +54 9 11 1234-5678</p>
                        <p className="contactLeft lg:text-[14px]"><strong>Dirección:</strong> Av. del Café 123, Buenos Aires, Argentina</p>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="contactLeft lg:text-[18px]">Seguinos en nuestras redes:</p>
                        <ul className="flex flex-col gap-[15px]">
                            <li className="contactLeft lg:text-[14px]"><strong>Instagram:</strong> <a href="">@JustCoffee</a></li>
                            <li className="contactLeft lg:text-[14px]"><strong>Facebook:</strong> <a href="">JustCoffee</a></li>
                            <li className="contactLeft lg:text-[14px]"><strong>Twitter:</strong> <a href="">@JustCoffeeArg</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col place-items-center place-content-center gap-[50px]">
                    <div className="contactRight w-full flex place-items-center place-content-end gap-[10px]">
                        <div className="flex flex-col gap-[10px] place-items-center">
                            <p className="text-[42px] font-bold tracking-widest">JUST COFFEE</p>
                            <p className="text-[14px] font-thin tracking-widest">Cada sobro cuenta una historia única</p>
                        </div>
                        <img src="/Logo.png" className="w-[150px]" alt="Just-Coffee Logo" />
                    </div>
                    <div className="contactRight w-full flex place-items-center place-content-end gap-[10px]">
                        <p>Developed By</p>
                        <img src="/devlogo.png" className="w-[150px]" alt="Jorge Neder - FullStack Web Developer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
