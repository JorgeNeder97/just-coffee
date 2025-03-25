"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const Contact = dynamic(() => import("@/components/Contact"), {ssr: false});

const ContactClient = () => {
  return <Contact />;
};

export default ContactClient;