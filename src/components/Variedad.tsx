import { Coffee } from '@/models/data';
import CoffeeCard from './CoffeeCard';
import Link from 'next/link';

async function getSomeCoffees() {
    const res = await fetch("http://localhost:3000/api/someCoffees");
    const data = await res.json();
    return data;
}


const Variedad = async () => {

    const coffees = await getSomeCoffees();
    
    return (
        <div className="opacity-0 animate-fadeIn delay-300 w-full flex flex-col gap-[50px] lg:gap-[100px] place-items-center place-content-center py-[50px] lg:py-[100px] lg:px-[50px]">
            
            <h3 className="text-xl sm:text-[32px] font-semibold">Variedades</h3>

            <div className="w-full flex flex-col lg:flex-row place-items-center lg:place-items-start place-content-center gap-[50px] lg:flex-wrap">
                {
                    coffees.map((coffee:Coffee, i:number) => (
                        <Link href={`http://localhost:3000/coffees/${coffee.id}`} key={i}>
                            <CoffeeCard coffee={coffee} />
                        </Link>
                    ))
                }
            </div>

            <button
                    className="w-[250px] sm:w-[350px] bg-primary rounded px-2 py-2 hover:cursor-pointer transition-all duration-[.2s] hover:scale-[1.1] hover:bg-primary-light active:scale-[.9]"
                >
                    <Link href="/coffees">Ver Todas Las Variedades</Link>
            </button>
        </div>
    );
};

export default Variedad;
