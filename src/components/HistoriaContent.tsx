"use client";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';



const HistoriaContent = () => {

    useEffect(() => {
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: 'bottom',
                duration: 2000,
                distance: '30px',
                delay: 500,
                beforeReveal(domEl) {
                    if (domEl instanceof HTMLElement) {
                        domEl.style.transform = '';
                    }
                },
                reset: false,
            });

            sr.reveal('.animated', {
                interval: 100
            });
        }
    }, []);

    return (
        <>
            <p className="animated lg:leading-[35px] text-justify font-thin lg:text-[16px]">La historia del café comienza hace siglos en las remotas tierras de <a href="https://es.wikipedia.org/wiki/Etiop%C3%ADa" target="_blank" className="textLink">Etiopía</a>, donde se cree que fue descubierto por un joven pastor llamado Kaldi en el <a href="https://es.wikipedia.org/wiki/Siglo_IX" target="_blank" className="textLink">siglo IX</a>. Según la leyenda, Kaldi notó que sus cabras se volvían más energéticas después de comer los frutos rojos de un arbusto desconocido. Intrigado, Kaldi probó los frutos él mismo y experimentó un aumento de energía. Años más tarde, los monjes en los monasterios etíopes comenzaron a preparar una infusión de estos frutos para mantenerse despiertos durante las largas horas de oración.</p>
            <p className="animated lg:leading-[35px] text-justify font-thin lg:text-[16px]">El café, tal como lo conocemos hoy, comenzó a viajar por el mundo en el <a href="https://es.wikipedia.org/wiki/Siglo_XV" target="_blank" className="textLink">siglo XV</a>, gracias al comercio árabe. Se cultivaba y se consumía principalmente en la <a href="https://es.wikipedia.org/wiki/Arabia_preisl%C3%A1mica" target="_blank" className="textLink">península arábiga</a>, donde los árabes refinaron el proceso de preparación de los granos, convirtiéndolos en una bebida energética. Fue en <a href="https://es.wikipedia.org/wiki/Yemen" target="_blank" className="textLink">Yemen</a>, al sur de la península, donde los árabes perfeccionaron el proceso de tostar y moler los granos de café, creando una bebida conocida como “qahwa”. Esta práctica se expandió rápidamente a lo largo del <a href="https://es.wikipedia.org/wiki/Mundo_isl%C3%A1mico#:~:text=Se%20entiende%20por%20mundo%20isl%C3%A1mico,el%20islam%20como%20religi%C3%B3n%20mayoritaria." target="_blank" className="textLink">mundo islámico</a>.</p>
            <p className="animated lg:leading-[35px] text-justify font-thin lg:text-[16px]">En el <a href="https://es.wikipedia.org/wiki/Siglo_XVII" target="_blank" className="textLink">siglo XVII</a>, el café llegó a <a href="https://es.wikipedia.org/wiki/Europa" target="_blank" className="textLink">Europa</a> a través de los mercaderes venecianos. Los europeos se enamoraron de la bebida rápidamente, y las primeras cafeterías europeas abrieron en lugares como <a href="https://es.wikipedia.org/wiki/Venecia" target="_blank" className="textLink">Venecia</a>, <a href="https://es.wikipedia.org/wiki/Londres" target="_blank" className="textLink">Londres</a> y <a href="https://es.wikipedia.org/wiki/Par%C3%ADs" target="_blank" className="textLink">París</a>. El café pasó de ser una bebida exótica a convertirse en parte fundamental de la vida cotidiana europea. A medida que la demanda aumentaba, las potencias coloniales comenzaron a plantar café en sus colonias tropicales, principalmente en <a href="https://es.wikipedia.org/wiki/Am%C3%A9rica_Latina" target="_blank" className="textLink">América Latina</a>, <a href="https://es.wikipedia.org/wiki/%C3%81frica" target="_blank" className="textLink">África</a> y <a href="https://es.wikipedia.org/wiki/Asia" target="_blank" className="textLink">Asia</a>.</p>
            <div className="flex flex-col gap-[30px] mt-[30px]">
                <h4 className="animated font-semibold lg:text-[24px] my-[60px] text-center">
                    Variedades del Café según la Región
                </h4>
                <ul className="flex flex-col gap-[35px]">
                    <li className="animated lg:leading-[30px] text-justify font-thin lg:text-[16px]">
                        <span className="font-semibold lg:text-[17px]">
                            Etiopía (Cuna del Café):
                        </span>{" "}
                        Los cafés etíopes son conocidos por su sabor afrutado,
                        floral y complejo. Variedades como el{" "}
                        <span className="textLinkNotFound">Yirgacheffe</span> son
                        célebres por sus notas cítricas y de jazmín. En general, los
                        cafés de Etiopía tienen un perfil muy limpio y brillante.
                    </li>
                    <li className="animated lg:leading-[30px] text-justify font-thin lg:text-[16px]">
                        <span className="font-semibold lg:text-[17px]">
                            Colombia (América Latina):
                        </span>{" "}
                        El{" "}
                        <a
                            href="https://es.wikipedia.org/wiki/Caf%C3%A9_de_Colombia"
                            target="_blank"
                            className="textLink"
                        >
                            Café Colombiano
                        </a>{" "}
                        es uno de los más populares del mundo debido a su sabor
                        suave y equilibrado. En Colombia se cultivan variedades de
                        Arabica, que se caracterizan por su sabor dulce, con toques
                        de frutos rojos, caramelo y nuez. Las montañas colombianas
                        proporcionan el clima perfecto para el cultivo de café de
                        alta calidad.
                    </li>
                    <li className="animated lg:leading-[30px] text-justify font-thin lg:text-[16px]">
                        <span className="font-semibold lg:text-[17px]">
                            Brasil (América Latina):
                        </span>{" "}
                        Brasil es el mayor productor mundial de café, y sus
                        variedades tienden a ser más suaves, con un perfil de sabor
                        ligeramente nuez y chocolate. El{" "}
                        <span className="textLinkNotFound">Café Bourbon</span> y el{" "}
                        <span className="textLinkNotFound">Café Santos</span> son
                        muy apreciados por su suavidad y baja acidez.
                    </li>
                    <li className="animated lg:leading-[30px] text-justify font-thin lg:text-[16px]">
                        <span className="font-semibold lg:text-[17px]">
                            Jamaica (Caribe):
                        </span>{" "}
                        El{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Jamaican_Blue_Mountain_Coffee"
                            target="_blank"
                            className="textLink"
                        >
                            Blue Mountain Coffee
                        </a>{" "}
                        de Jamaica es conocido por ser uno de los cafés más caros y
                        apreciados del mundo. Su sabor es suave, con un toque dulce
                        y sin amargor, lo que lo hace ideal para aquellos que buscan
                        una experiencia más refinada.
                    </li>
                    <li className="animated lg:leading-[30px] text-justify font-thin lg:text-[16px]">
                        <span className="font-semibold lg:text-[17px]">
                            Vietnam (Asia):
                        </span>{" "}
                        Vietnam es uno de los principales productores de{" "}
                        <a
                            href="https://es.wikipedia.org/wiki/Coffea_canephora"
                            target="_blank"
                            className="textLink"
                        >
                            Café Robusta
                        </a>
                        . El café vietnamita es más fuerte y tiene un perfil más
                        amargo y terroso. Es popular en bebidas como el{" "}
                        <a
                            href="https://es.wikipedia.org/wiki/C%C3%A0_ph%C3%AA_s%E1%BB%AFa_%C4%91%C3%A1"
                            target="_blank"
                            className="textLink"
                        >
                            Cà Phê Sữa Đá
                        </a>
                        , un café helado con leche condensada.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HistoriaContent;