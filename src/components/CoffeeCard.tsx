"use client";
import Image from "next/image";
import { Coffee } from "@/models/data";
import { motion } from "framer-motion";
import { useState } from 'react';

const CoffeeCard = ({ coffee } : {coffee: Coffee}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleOnClick = () => {
        setIsLoading(true);
    };

    return (
        <>
            <motion.div
                className={`relative w-[250px] sm:w-[350px] h-[200px] sm:h-[300px] flex flex-col gap-[40px] rounded-xl pr-[5px] sm:pr-[10px] hover:cursor-pointer`}
                whileHover={{ scale: 1.1 }}
                onClick={handleOnClick}
            >
                {
                    isLoading && (
                        <div className="absolute top-0 right-0 bg-black/30 z-50 w-[250px] sm:w-[350px] h-[200px] sm:h-[300px] flex flex-col place-items-center place-content-center gap-[30px]">
                            <p>CARGANDO</p>
                            <span className="loading loading-bars loading-md"></span>
                        </div>
                    )
                }
                <h5 className="sm:text-[20px] z-10 pt-[10px] text-end hover:tracking-widest hover:translate-x-[-2px] transition-all duration-[.3s]">
                    {coffee.nombre}
                </h5>
                <Image
                    className="absolute brightness-50 object-cover sm:w-[350px] h-[200px] sm:h-[300px] rounded-xl hover:brightness-75 transition-all duration-[.3s] ease-in-out"
                    src={coffee.imagenUrl}
                    alt=""
                    width={650}
                    height={650}
                />
            </motion.div>
        </>
    );
};

export default CoffeeCard;