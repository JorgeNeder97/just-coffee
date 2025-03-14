import HeroClient from "@/components/HeroClient";
import Variedad from "@/components/Variedad";


const Home = () => {
    return (
        <div className="w-full">
            <section id="hero" className="relative w-full h-[87vh] bg-[url(/Heros.jpg)] bg-cover bg-bottom">
                <HeroClient />
            </section>
            <section id="variedad" className="relative w-full bg-[url(/NavBarBackground.jpg)] bg-cover">
                <Variedad />
            </section>
        </div>
    );
};

export default Home;
