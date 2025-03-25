import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Coffee, CoffeeParams } from "@/models/data";

// En este archivo no pueden ir peticiones PUT, PATCH, DELETE o GET (que requieran params)
// ya que hasta aquí NO EXISTE "params" porque no pasamos ningun parametro por las rutas.
// Estas rutas se crean dentro de la carpeta que tiene el id (ej: [coffeeId]) ya que ahi si trabajamos
// con params.

export async function GET() {
    try {
        const cafes = await prisma.cafe.findMany();
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

export async function POST(request:NextRequest) {
    try {
        // En next.js se accede al body utilizando request y .json() el cual es una funcion asincrona.
        const data:Coffee = await request.json();
        const { nombre, ingredientes, descripcion, imagenUrl } = data;
        const nuevoCafe = await prisma.cafe.create({
            data: {
                nombre,
                ingredientes,
                descripcion,
                imagenUrl
            },
        });
        if(!data) return NextResponse.json({ message: "No se ingresaron datos" }, { status: 400 });
        return NextResponse.json({message: "Registro creado con éxito.", data: nuevoCafe}, { status: 201 });
    } catch(error) {
        if(error instanceof Error) {
            console.log(error);
            return NextResponse.json({ message: error.message }, { status: 500 });
        };
    };
};