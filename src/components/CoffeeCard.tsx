"use client";
import { Coffee } from "@/models/data";
import { motion } from "framer-motion";

const CoffeeCard = ({ coffee } : {coffee: Coffee}) => {


    return (
        <>
            <motion.div
                className={`relative lg:w-[350px] lg:h-[300px] flex flex-col gap-[40px] rounded-xl lg:pr-[10px] hover:cursor-pointer`}
                whileHover={{ scale: 1.1 }}
            >
                <h5 className="lg:text-[20px] z-10 pt-[10px] text-end hover:tracking-widest hover:translate-x-[-2px] transition-all duration-[.3s]">
                    {coffee.nombre}
                </h5>
                <img
                    className="absolute brightness-50 object-cover lg:w-[350px] lg:h-[300px] rounded hover:brightness-75 transition-all duration-[.3s] ease-in-out"
                    src={coffee.imagenUrl}
                    alt=""
                />
            </motion.div>
        </>
    );
};

export default CoffeeCard;