import { CoffeeParams } from "@/models/data";

async function getCoffee(coffeeId:number) {
    const res = await fetch(`http://localhost:3000/api/coffees/${coffeeId}`);
    const data = res.json();
    return data;
}

const Coffee: React.FC<CoffeeParams> = async ({ params }) => {

    const coffee = await getCoffee(params.coffeeId);

    return (
        <div className="w-full bg-[url(/NavBarBackground.jpg)] h-[100vh] bg-contain">
            <div className="flex place-items-start place-content-center gap-[50px]">
                <div className="w-[45vw] flex flex-col gap-[30px]">
                    <h3>{coffee.nombre}</h3>
                    <ul className="flex flex-col gap-[15px]">
                        {
                            coffee.ingredientes && coffee.ingredientes.map((ing: string, i:number ) => (
                                <li className="" key={i}>{ing}</li>
                            ))
                        }
                    </ul>
                    <p className="">{coffee.descripcion}</p>
                </div>
                <div className="lg:w-[450px] flex place-items-center place-content-center">
                    <img className="w-full" src={coffee.imagenUrl} alt={coffee.nombre} />
                </div>
            </div>
        </div>
    );
};

export default Coffee;
