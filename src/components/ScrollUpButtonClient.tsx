"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const ScrollUpButton = dynamic(() => import("@/components/ScrollUpButton"), {ssr: false});

const ScrollUpButtonClient = () => {
  return <ScrollUpButton />;
};

export default ScrollUpButtonClient;