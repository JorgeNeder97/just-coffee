import Link from "next/link";

const BackButton = ({ href } : { href : string }) => {
    return (
        <Link href={href} className="absolute lg:top-[30px] lg:right-[70px] z-40 text-white hover:cursor-pointer group">
            <div className="flex place-items-center place-content-between overflow-hidden w-[140px]">
                <p className="lg:text-[14px] font-medium translate-x-[200%] opacity-0 group-hover:translate-x-[0%] group-hover:opacity-100 transition-all duration-[.5s] ease-in-out">Volver Atrás</p>
                <img src="/coffeeFavicon.png" className="translate-x-[5px] lg:w-[50px] brightness-75 group-hover:animate-frontSpin animate-backSpin" alt="Volver atrás" />
            </div>
        </Link>
    )
};

export default BackButton;