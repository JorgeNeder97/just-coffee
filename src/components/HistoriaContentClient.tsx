"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const HistoriaContent = dynamic(() => import("@/components/HistoriaContent"), {ssr: false});

const HistoriaContentClient = () => {
  return <HistoriaContent />;
};

export default HistoriaContentClient;