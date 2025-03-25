"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const About = dynamic(() => import("@/components/About"), {ssr: false});

const AboutClient = () => {
  return <About />;
};

export default AboutClient;