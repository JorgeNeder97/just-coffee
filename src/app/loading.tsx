"use client";
import Image from "next/image";
import BackButton from "@/components/BackButton";

const loading = () => {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-[url(/DefaultBackground.webp)] bg-contain flex flex-col gap-[30px] place-items-center place-content-center">
        <BackButton href="/" />
        <Image width={300} height={300} src="/Logo.png" className="w-[100px]" alt="Cargando" />
        <p className="">CARGANDO</p>
        <span className="loading loading-bars loading-xl"></span>
    </div>
  )
};

export default loading;