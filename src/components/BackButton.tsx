import Link from "next/link";

const BackButton = ({ href } : { href : string }) => {
    return (
        <Link href={href} className="absolute top-[15px] lg:top-[30px] right-[10px] lg:right-[70px] z-40 text-white hover:cursor-pointer group">
            <div className="flex place-items-center place-content-between overflow-hidden w-[110px] lg:w-[140px]">
                <p className="text-[12px] lg:text-[14px] lg:font-medium lg:translate-x-[200%] lg:opacity-0 lg:group-hover:translate-x-[0%] lg:group-hover:opacity-100 transition-all duration-[.5s] ease-in-out">Volver Atrás</p>
                <img src="/coffeeFavicon.png" className="lg:translate-x-[5px] w-[30px] lg:w-[50px] lg:brightness-75 lg:group-hover:animate-frontSpin group-active:animate-frontSpin animate-backSpin" alt="Volver atrás" />
            </div>
        </Link>
    )
};

export default BackButton;