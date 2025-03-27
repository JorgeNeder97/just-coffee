import HeroClient from "@/components/HeroClient";
import Variedad from "@/components/Variedad";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";
import AboutClient from "@/components/AboutClient";
import ContactClient from "@/components/ContactClient";
import Historia from "@/components/Historia";
import MetodosPreparacionClient from "@/components/MetodosPreparacionClient";

const Home = () => {
    return (
        <div className="w-full">
            <section id="hero" className="relative w-full h-[87vh] bg-[url(/Heros.jpg)] bg-cover bg-bottom">
                <HeroClient />
            </section>
            <section id="about" className="relative w-full bg-[url(/aboutBackground.jpg)] bg-cover bg-bottom">
                <AboutClient />
            </section>
            <section id="historia" className="relative w-full bg-[url(/HistoriaBackground.jpg)] bg-contain">
                <Historia />
            </section>
            <section id="variedad" className="relative w-full bg-[url(/DefaultBackground.jpg)] bg-contain">
            <Suspense fallback={<LoadingPage />}>
                <Variedad />
            </Suspense>
            </section>
            <section id="metodosPreparacion" className="relative w-full bg-[url(/methods.jpg)] bg-cover">
                <MetodosPreparacionClient />
            </section>
            {/* <section id="beneficios" className="relative w-full bg-[url(/methods.jpg)] bg-cover">
                <Beneficios />
            </section> */}
            <section id="contacto" className="relative w-full bg-[url(/contact.jpg)] bg-cover bg-top">
                <ContactClient />
            </section>
        </div>
    );
};

export default Home;
