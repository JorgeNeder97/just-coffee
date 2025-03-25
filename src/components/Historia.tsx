
const Historia = () => {
    return (
        <div className=" lg:px-[100px] lg:py-[100px] flex flex-col place-items-center gap-[50px]">
            <h3 className=" lg:text-[32px] font-semibold place-self-start">El Origen del Café</h3>
            <div className="flex place-items-start place-content-center gap-[50px]">
                <p className="lg:leading-[30px] text-justify">La historia del café comienza hace siglos en las remotas tierras de Etiopía, donde se cree que fue descubierto por un joven pastor llamado Kaldi en el siglo IX. Según la leyenda, Kaldi notó que sus cabras se volvían más energéticas después de comer los frutos rojos de un arbusto desconocido. Intrigado, Kaldi probó los frutos él mismo y experimentó un aumento de energía. Años más tarde, los monjes en los monasterios etíopes comenzaron a preparar una infusión de estos frutos para mantenerse despiertos durante las largas horas de oración.</p>
                <img className="w-[550px] rounded-xl" src="/Origen.jpg" alt="Imagen de un saco abierto con granos de café." />
            </div>
            <p className=" lg:leading-[30px] text-justify">El café, tal como lo conocemos hoy, comenzó a viajar por el mundo en el siglo XV, gracias al comercio árabe. Se cultivaba y se consumía principalmente en la península arábiga, donde los árabes refinaron el proceso de preparación de los granos, convirtiéndolos en una bebida energética. Fue en Yemen, al sur de la península, donde los árabes perfeccionaron el proceso de tostar y moler los granos de café, creando una bebida conocida como “qahwa”. Esta práctica se expandió rápidamente a lo largo del mundo islámico.</p>
            <p className=" lg:leading-[30px] text-justify">En el siglo XVII, el café llegó a Europa a través de los mercaderes venecianos. Los europeos se enamoraron de la bebida rápidamente, y las primeras cafeterías europeas abrieron en lugares como Venecia, Londres y París. El café pasó de ser una bebida exótica a convertirse en parte fundamental de la vida cotidiana europea. A medida que la demanda aumentaba, las potencias coloniales comenzaron a plantar café en sus colonias tropicales, principalmente en América Latina, África y Asia.</p>
            <div className="flex flex-col gap-[30px]">
                <h4 className="">Variedades del Café según la Región</h4>
                <p className="">El café tiene una enorme variedad de sabores, aromas y características, y estos pueden variar enormemente dependiendo de la región donde se cultive. A continuación, te explico las principales variedades que se cultivan en algunas de las regiones más importantes del mundo:</p>
                <ul className="flex flex-col gap-[15px]">
                    <li className="">Etiopía (Cuna del Café): Los cafés etíopes son conocidos por su sabor afrutado, floral y complejo. Variedades como el Yirgacheffe son célebres por sus notas cítricas y de jazmín. En general, los cafés de Etiopía tienen un perfil muy limpio y brillante.</li>
                    <li className="">Colombia (América Latina): El café colombiano es uno de los más populares del mundo debido a su sabor suave y equilibrado. En Colombia se cultivan variedades de Arabica, que se caracterizan por su sabor dulce, con toques de frutos rojos, caramelo y nuez. Las montañas colombianas proporcionan el clima perfecto para el cultivo de café de alta calidad.</li>
                    <li className="">Brasil (América Latina): Brasil es el mayor productor mundial de café, y sus variedades tienden a ser más suaves, con un perfil de sabor ligeramente nuez y chocolate. El Café Bourbon y el Café Santos son muy apreciados por su suavidad y baja acidez.</li>
                    <li className="">Jamaica (Caribe): El Blue Mountain Coffee de Jamaica es conocido por ser uno de los cafés más caros y apreciados del mundo. Su sabor es suave, con un toque dulce y sin amargor, lo que lo hace ideal para aquellos que buscan una experiencia más refinada.</li>
                    <li className="">Vietnam (Asia): Vietnam es uno de los principales productores de café Robusta. El café vietnamita es más fuerte y tiene un perfil más amargo y terroso. Es popular en bebidas como el Cà Phê Sữa Đá, un café helado con leche condensada.</li>
                </ul>
            </div>
        </div>
    )
};

export default Historia;