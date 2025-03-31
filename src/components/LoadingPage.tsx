"use client";
import Image from "next/image";


const LoadingPage = () => {
  return (
    <div className="w-full h-[500px] flex flex-col gap-[30px] place-items-center place-content-center">
        <Image width={100} height={100} unselectable="on" style={{ userSelect: "none" }} src="/Logo.png" className="w-[100px]" alt="Cargando" />
        <p className="">CARGANDO</p>
        <span className="loading loading-ring loading-xl"></span>
    </div>
  )
};

export default LoadingPage;