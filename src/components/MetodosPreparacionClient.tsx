"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const MetodosPreparacion = dynamic(() => import("@/components/MetodosPreparacion"), {ssr: false});

const MetodosPreparacionClient = () => {
  return <MetodosPreparacion />;
};

export default MetodosPreparacionClient;