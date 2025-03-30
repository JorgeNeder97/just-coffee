import HeroClient from "@/components/HeroClient";
import Variedad from "@/components/Variedad";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";
import AboutClient from "@/components/AboutClient";
import ContactClient from "@/components/ContactClient";
import Historia from "@/components/Historia";
import MetodosPreparacionClient from "@/components/MetodosPreparacionClient";
import ScrollUpButtonClient from "@/components/ScrollUpButtonClient";

const Home = () => {
    return (
        <div className="w-full">
            <ScrollUpButtonClient />
            <section id="hero" className="relative w-full h-[calc(100vh-80px)] bg-[url(/Heros.webp)] bg-cover bg-right lg:bg-bottom">
                <HeroClient />
            </section>
            <section id="about" className="relative w-full bg-[url(/aboutBackground.webp)] bg-cover bg-bottom">
                <AboutClient />
            </section>
            <section id="historia" className="relative w-full bg-[url(/HistoriaBackground.webp)] bg-contain">
                <Historia />
            </section>
            <section id="variedad" className="relative w-full bg-[url(/DefaultBackground.webp)] bg-contain">
            <Suspense fallback={<LoadingPage />}>
                <Variedad />
            </Suspense>
            </section>
            <section id="metodosPreparacion" className="relative w-full bg-[url(/methods.webp)] bg-cover">
                <MetodosPreparacionClient />
            </section>
            <section id="contacto" className="relative w-full bg-[url(/contact.webp)] bg-cover bg-top">
                <ContactClient />
            </section>
        </div>
    );
};

export default Home;
