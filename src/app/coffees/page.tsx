import { Coffee } from "@/models/data";
import CoffeeCard from "@/components/CoffeeCard";
import Link from "next/link";
import BackButton from "@/components/BackButton";

async function getCoffees() {
    const res = await fetch("http://localhost:3000/api/coffees");
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
}

const Coffees = async () => {
    const coffees = await getCoffees();

    return (
        <div className="relative w-full flex flex-col bg-[url(/DefaultBackground.jpg)] bg-contain place-items-center place-content-center lg:py-[100px] lg:px-[50px]">
            <BackButton href="/" />
            <div className="opacity-0 animate-fadeIn delay-300 w-full flex flex-col place-items-center place-content-center gap-[100px]">
                <h3 className="text-[32px]">Variedades</h3>

                <div className="w-full flex place-items-start place-content-center gap-[50px] flex-wrap">
                    {
                        coffees.map((coffee:Coffee, i:number) => (
                            <Link href={`http://localhost:3000/coffees/${coffee.id}`} key={i}>
                                <CoffeeCard coffee={coffee} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Coffees;
