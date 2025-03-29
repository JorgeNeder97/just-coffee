import HistoriaContentClient from "./HistoriaContentClient";
import HistoriaTitleClient from "./HistoriaTitleClient";

const Historia = () => {    
    return (
        <div className="px-[30px] sm:px-[50px] lg:px-[100px] py-[50px] lg:py-[100px] flex flex-col place-items-center gap-[30px] lg:gap-[50px]">
            <HistoriaTitleClient />
            <div>
                <img className="w-[150px] h-[300px] object-cover object-right lg:h-auto lg:w-[550px] float-right ml-[15px] lg:ml-[35px] my-[5px] lg:my-[10px] brightness-75 rounded-xl" src="/OrigenImage.jpg" alt="Imagen de un saco abierto con granos de café." />
                <HistoriaContentClient />
            </div>
        </div>
    )
};

export default Historia;