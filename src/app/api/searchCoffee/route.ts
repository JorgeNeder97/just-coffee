import { NextRequest } from "next/server";


export async function GET(request:NextRequest) {
    // Obtiene la url con las querys que le pasemos, es util para buscadores por ejemplo.
    const { searchParams } = new URL(request.url);

    // Obtiene el contenido que le pasamos a la query nombre.
    console.log(searchParams.get("nombre"));
};