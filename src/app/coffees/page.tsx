import { Coffee } from "@/models/data";
import CoffeeCard from "@/components/CoffeeCard";

async function getCoffees() {
    const res = await fetch("http://localhost:3000/api/coffees");
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
}

const Coffees = async () => {
    const coffees = await getCoffees();

    return (
        <div className="w-full flex flex-col bg-[url(/DefaultBackground.jpg)] bg-contain gap-[100px] place-items-center place-content-center lg:py-[100px] lg:px-[50px]">
            
            <h3 className="text-[32px]">Variedades</h3>

            <div className="w-full flex place-items-start place-content-center gap-[50px] flex-wrap">
                {
                    coffees.map((coffee:Coffee, i:number) => (
                        <CoffeeCard coffee={coffee} key={i} />
                    ))
                }
            </div>
        </div>
    );
};

export default Coffees;
