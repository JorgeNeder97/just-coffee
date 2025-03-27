"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const MetodosPreparacion = () => {

    useEffect(() => {
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: "left",
                duration: 2000,
                distance: "60px",
                delay: 100,
                beforeReveal(domEl) {
                    if (domEl instanceof HTMLElement) {
                        domEl.style.transform = "";
                    }
                },
                reset: false,
            });

            sr.reveal(".leftSide");
            sr.reveal(".rightSide", {
                origin: "right",
            });
            sr.reveal(".fromBottom", {
                origin: "bottom",
            });
        }
    }, []);

    return (
        <div className="flex flex-col place-items-center place-content-center lg:gap-[100px] lg:py-[100px]">
            <h3 className="fromBottom lg:text-[32px] font-semibold">Métodos de Preparación</h3>
            <div className="flex flex-col place-items-center place-content-center lg:gap-[100px]">
                <div className="methodContent">
                    <div className="methodTextContent leftSide order-1 lg:w-[550px] lg:leading-[30px]">
                        <h4 className=" lg:text-[24px] font-semibold">Café Espresso</h4>
                        <p className="lg:text-[16px] font-thin">El espresso es la base de muchas de las bebidas más populares de café. Se prepara forzando agua caliente a alta presión a través de los granos finamente molidos. Este método produce una bebida concentrada, rica en sabor y con una capa de crema dorada en la parte superior. Es la base para bebidas como el cappuccino, latte y macchiato.</p>
                    </div>
                    <img src="/Mespresso.jpg" className="rightSide order-2 lg:w-[550px] rounded-xl brightness-75" alt="Café Espresso" />
                </div>
                <div className="methodContent">
                    <div className="methodTextContent rightSide order-2 lg:w-[550px] lg:leading-[30px]">
                        <h4 className=" lg:text-[24px] font-semibold">Filtrado o Café de Goteo</h4>
                        <p className="lg:text-[16px] font-thin">Este método es uno de los más tradicionales y accesibles. Consiste en verter agua caliente sobre café molido en un filtro de papel o metálico, lo que permite que el café se "filtre" lentamente, extrayendo sus aceites y sabores. El café resultante es limpio, suave y sin la intensidad del espresso. Existen varias máquinas para este proceso, como las de goteo automáticas y las manuales (como las chemex).</p>
                    </div>
                    <img src="/Mgoteo.png" className="leftSide order-1 lg:w-[550px] rounded-xl brightness-75" alt="Café de Goteo" />
                </div>
                <div className="methodContent">
                    <div className="methodTextContent leftSide order-1 lg:w-[550px] lg:leading-[30px]">
                        <h4 className=" lg:text-[24px] font-semibold">French Press</h4>
                        <p className="lg:text-[16px] font-thin">La prensa francesa es un método manual que se ha vuelto muy popular en los últimos años debido a su simplicidad y el sabor profundo que produce. En este proceso, se mezcla café molido grueso con agua caliente, se deja reposar durante unos minutos y luego se presiona el café con un émbolo para separar los posos de la bebida. Este método resulta en un café con cuerpo, con una textura densa y rica.</p>
                    </div>
                    <img src="/MfrenchPress.webp" className="rightSide order-2 lg:w-[550px] rounded-xl brightness-75" alt="" />
                </div>
                <div className="methodContent">
                    <div className="methodTextContent rightSide order-2 lg:w-[550px] lg:leading-[30px]">
                        <h4 className=" lg:text-[24px] font-semibold">AeroPress</h4>
                        <p className="lg:text-[16px] font-thin">El AeroPress es un método más moderno y portátil, que usa presión manual para extraer el café. Se colocan los granos molidos finamente en un cilindro, se agrega agua caliente, se revuelven y luego se presiona el líquido a través de un filtro. El resultado es un café limpio, con menos amargor que el espresso.</p>
                    </div>
                    <img src="/MaeroPress.webp" className="leftSide order-1 lg:w-[550px] rounded-xl brightness-75" alt="" />
                </div>
                <div className="methodContent">
                    <div className="methodTextContent leftSide order-1 lg:w-[550px] lg:leading-[30px]">
                        <h4 className=" lg:text-[24px] font-semibold">Cold Brew</h4>
                        <p className="lg:text-[16px] font-thin">El cold brew o café frío es preparado al infundir café molido grueso en agua fría durante un período prolongado (normalmente 12-24 horas). El proceso de extracción lenta da como resultado un café suave, menos ácido y con un perfil de sabor más dulce, ideal para los días calurosos.</p>
                    </div>
                    <img src="/McoldBrew.webp" className="rightSide order-2 lg:w-[550px] rounded-xl brightness-75" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MetodosPreparacion;
