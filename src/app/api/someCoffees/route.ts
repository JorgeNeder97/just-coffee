import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// En este archivo no pueden ir peticiones PUT, PATCH, DELETE o GET (que requieran params)
// ya que hasta aquí NO EXISTE "params" porque no pasamos ningun parametro por las rutas.
// Estas rutas se crean dentro de la carpeta que tiene el id (ej: [coffeeId]) ya que ahi si trabajamos
// con params.

export async function GET() {
    try {
        const cafes = await prisma.cafe.findMany({
            take: 3,
        });
        if(!cafes) return NextResponse.json({ message: "No se encontraron registros." }, { status: 404 });
        return NextResponse.json(cafes);
    } catch(error) {
        // Es necesario verificar si error es una instancia de Error para que typescript no nos de error
        if(error instanceof Error) {
            console.log(error);
            return NextResponse.json({ message: error.message }, { status: 500 });
        };
    };
};