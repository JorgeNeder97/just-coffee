"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const HistoriaTitle = dynamic(() => import("@/components/HistoriaTitle"), {ssr: false});

const HistoriaTitleClient = () => {
  return <HistoriaTitle />;
};

export default HistoriaTitleClient;