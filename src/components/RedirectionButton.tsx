"use client";
import { useRouter } from "next/navigation";


const RedirectionButton = () => {
    const router = useRouter();
    return <button className="bg-primary px-2 py-1 rounded text-white hover:cursor-pointer" onClick={() => {
        alert("Redireccionando al Home...");
        router.push("/");
    }}>Redirect</button>;
};

export default RedirectionButton;
