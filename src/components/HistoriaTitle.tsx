"use client";

import revealElements from "@/hooks/ScrollReveal";
import { useEffect } from "react";

const HistoriaTitle = () => {
    useEffect(() => {
        revealElements();
    }, []);

    return (
        <h3 className="fromLeft text-xl sm:text-[32px] font-semibold place-self-start mt-[10px] mb-[30px]">
            El Origen del Café
        </h3>
    );
};

export default HistoriaTitle;
