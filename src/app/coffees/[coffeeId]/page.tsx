import { CoffeeParams } from "@/models/data";

async function getCoffee(coffeeId:number) {
    try {
        const res = await fetch(`http://localhost:3000/api/coffees/${coffeeId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const Coffee: React.FC<CoffeeParams> = async ({ params }) => {
    
    // Es necesario usar await ya que params devuelve una promesa.
    const coffeeId = (await params).coffeeId;
    const coffee = await getCoffee(coffeeId);

    return (
        <div className="w-full bg-[url(/DefaultBackground.jpg)] h-[calc(100vh-80px)] bg-contain lg:py-[80px]">
            <div className="opacity-0 animate-fadeIn delay-300 flex place-items-start place-content-center gap-[50px]">
                <div className="lg:w-[500px] lg:h-[396px] brightness-75 flex place-items-center place-content-center hover:brightness-90 transition-all duration-[.5s] ease-in-out">
                    <img className="w-full lg:h-[396px] object-cover rounded-xl shadow-2xl" src={coffee.imagenUrl} alt={coffee.nombre} />
                </div>
                <div className="w-[45vw] lg:h-[396px] flex flex-col place-content-between">
                    <h3 className=" lg:text-[32px] font-semibold">{coffee.nombre}</h3>
                    <ul className="flex flex-col gap-[15px]">
                        <h4 className="font-medium lg:text-[20px]">Ingredientes</h4>
                        {
                            coffee.ingredientes && coffee.ingredientes.map((ing: string, i:number ) => (
                                <li className="list-disc ml-[25px]" key={i}>{ing}</li>
                            ))
                        }
                    </ul>
                    <p className="font-thin lg:tracking-wide lg:leading-[28px]">{coffee.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default Coffee;
