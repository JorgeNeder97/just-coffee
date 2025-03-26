import HistoriaContentClient from "./HistoriaContentClient";
import HistoriaTitleClient from "./HistoriaTitleClient";

const Historia = () => {    
    return (
        <div className=" lg:px-[100px] lg:py-[100px] flex flex-col place-items-center gap-[50px]">
            <HistoriaTitleClient />
            <div>
                <img className="w-[550px] float-right ml-[35px] my-[10px] brightness-75 rounded-xl" src="/OrigenImage.jpg" alt="Imagen de un saco abierto con granos de café." />
                <HistoriaContentClient />
            </div>
        </div>
    )
};

export default Historia;