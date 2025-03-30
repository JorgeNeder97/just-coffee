import { Coffee } from "@/models/data";
import CoffeeCard from "@/components/CoffeeCard";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import ScrollUpButton from "@/components/ScrollUpButton";
import { prisma } from "@/libs/prisma";

async function getCoffees() {
    try {
        const cafes = await prisma.cafe.findMany();
        if(!cafes) return;
        return cafes;
    } catch (error) {
        console.log(error);        
    }
};

const Coffees = async () => {
    const coffees = await getCoffees();
    
    if(coffees)
    return (
        <div className="relative w-full flex flex-col bg-[url(/DefaultBackground.jpg)] bg-contain place-items-center place-content-center py-[50px] lg:py-[100px] sm:px-[20px] lg:px-[50px]">
            <BackButton href="/" />
            <ScrollUpButton />
            <div className="opacity-0 animate-fadeIn delay-300 w-full flex flex-col place-items-center place-content-center gap-[50px] lg:gap-[100px]">
                <h3 className="text-xl sm:text-[32px]">Variedades</h3>

                <div className="w-full flex place-items-start place-content-center gap-[50px] sm:gap-[20px] lg:gap-[50px] flex-wrap">
                    {
                        coffees.map((coffee:Coffee, i:number) => (
                            <Link href={`/coffees/${coffee.id}`} key={i}>
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
