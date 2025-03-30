"use client";
import revealElements from "@/hooks/ScrollReveal";
import Image from "next/image";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    revealElements();
  }, []);
  
  return (
    <div className="w-full flex flex-col place-items-center place-content-center gap-[50px] py-[100px]">
        <h3 className="fromTop text-center text-xl sm:text-[32px] font-semibold">Sobre Nosotros</h3>
        <div className="flex flex-col lg:flex-row place-items-center place-content-center gap-[20px] sm:gap-[50px] lg:gap-[100px]">
            <p className="fromLeft w-[300px] sm:w-[500px] text-[14px] sm:text-[18px] sm:leading-[30px] lg:leading-[40px] text-justify lg:tracking-wide">JustCoffee nació para los verdaderos amantes del café. Nuestro objetivo es brindar toda la información sobre los diferentes tipos de café, sus orígenes y cómo preparar la taza perfecta. Porque creemos que cada sorbo cuenta una historia única.</p>
            <Image width={1000} height={1000} src="/Logo.png" className="fromRight w-[100px] sm:w-[150px] lg:w-[300px]" alt="Just-Coffee" />
        </div>
    </div>
  )
};

export default About;