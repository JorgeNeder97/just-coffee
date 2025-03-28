"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
    return (
        <nav id="navbar" className="w-full h-[80px] py-4 bg-[url(/NavBackground.jpg)] bg-cover">
            <ul className="flex place-items-center place-content-center gap-[30px]">
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/coffees">Variedades</Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/">
                        <img
                            src="/Logo.png"
                            alt="El Logo de Just Coffee el cual esta compuesto por una deliciosa taza de café humeante rodeado de granos de café."
                            className="w-[50px]"
                        />
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/#contacto">Contacto</Link>
                </motion.li>
            </ul>
        </nav>
    );
};

export default NavBar;
