import fs from "fs";
import path from "path";
import Image from "next/image";
import type { Coffee, CoffeeParams } from "@/models/data";
import BackButton from "@/components/BackButton";

async function getCoffee(coffeeId:number) {
    try {
        const filePath = path.join(process.cwd(), "data", "coffees.json");
        const jsonData = fs.readFileSync(filePath, "utf8");
        const coffees: Coffee[] = JSON.parse(jsonData);
        const coffee = coffees.find((c) => c.id === Number(coffeeId));
        return coffee || null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const Coffee: React.FC<CoffeeParams> = async ({ params }) => {
    
    // Es necesario usar await ya que params devuelve una promesa.
    const coffeeId = (await params).coffeeId;
    const coffee = await getCoffee(coffeeId);

    if(coffee)
    return (
        <div className="relative w-full bg-[url(/HistoriaBackground.webp)] min-h-[calc(100vh-80px)] bg-contain py-[60px] px-[30px] lg:px-0 lg:py-[80px]">
            <BackButton href="/coffees" />
            <div className="opacity-0 animate-fadeIn delay-300 flex flex-col lg:flex-row place-items-center lg:place-items-start place-content-center gap-[15px] lg:gap-[50px]">
                <div className="order-2 lg:order-1 lg:w-[500px] lg:h-[396px] brightness-75 flex place-items-center place-content-center hover:brightness-90 transition-all duration-[.5s] ease-in-out">
                    <Image unselectable="on" style={{ userSelect: "none" }} className="w-full hidden lg:inline-block lg:h-[396px] object-cover rounded-xl shadow-2xl" src={coffee.imagenUrl} alt={coffee.nombre} width={650} height={650} />
                </div>
                <div className="order-1 lg:order-2 w-full max-w-[500px] lg:w-[45vw] lg:max-w-none lg:h-[396px] flex flex-col gap-[30px] lg:gap-[0px] place-items-center lg:place-items-start lg:place-content-between">
                    <h3 className="text-xl lg:text-[32px] font-semibold">{coffee.nombre}</h3>
                    <Image unselectable="on" style={{ userSelect: "none" }} className="w-full max-w-[500px] inline-block lg:hidden lg:h-[396px] object-cover rounded-xl shadow-2xl" src={coffee.imagenUrl} alt={coffee.nombre} width={650} height={650} />
                    <ul className="flex flex-col gap-[15px] place-self-start">
                        <h4 className="font-medium text-[18px] lg:text-[20px]">Ingredientes</h4>
                        {
                            coffee.ingredientes && coffee.ingredientes.map((ing: string, i:number ) => (
                                <li className="list-disc text-[14px] lg:text-[16px] ml-[25px]" key={i}>{ing}</li>
                            ))
                        }
                    </ul>
                    <p className="font-thin text-justify text-[14px] lg:text-[16px] lg:text-left lg:tracking-wide lg:leading-[28px]">{coffee.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default Coffee;