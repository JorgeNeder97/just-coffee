"use client";


const LoadingPage = () => {
  return (
    <div className="w-full h-[500px] flex flex-col gap-[30px] place-items-center place-content-center">
        <img src="/Logo.png" className="w-[100px]" alt="Cargando" />
        <p className="">CARGANDO</p>
        <span className="loading loading-bars loading-xl"></span>
    </div>
  )
};

export default LoadingPage;