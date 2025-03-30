import { CoffeeParams } from "@/models/data";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
// Traemos Prisma para utilizar PrismaClientKnownError
import { Prisma } from "@prisma/client";

// Siempre se verifica que error sea una instancia de Prisma.PrismaClientKnownRequestError
// cuando trabajamos con validaciones que tienen que ver con un posible error al utilizar prisma.

export async function GET(request: NextRequest ,{ params } : CoffeeParams) {
    try {
        const coffeeId = Number((await params).coffeeId);
        if (isNaN(coffeeId)) {
            return NextResponse.json({ message: "ID inválido." }, { status: 400 });
        };
        const coffee = await prisma.cafe.findFirst({
            where: {
                // Transformamos a Number el params.coffeeId, ya que por defecto es un string
                id: coffeeId,
            },
        });
        if(!coffee) return NextResponse.json({ message: "El registro buscado no existe." }, { status: 404 });
        return NextResponse.json(coffee);
    } catch (error) {
        if(error instanceof Error) {
            console.log(error.message);
            return NextResponse.json({ message: error.message }, { status: 500 });
        };
    };
};

export async function PATCH(request: Request, { params } : CoffeeParams) {
    try {
        const coffeeId = Number((await params).coffeeId);
        const data = await request.json();
        const coffeeUpdated = await prisma.cafe.update({
            data: {
                ...data
            },
            where: {
                id: coffeeId,
            },
        });
        // Aqui no sirve poner una validación ya que directamente salta al catch
        return NextResponse.json({ message: "Registro actualizado con éxito.", data: coffeeUpdated }, { status: 200 });
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(error);
            if(error.code === "P2025") {
                return NextResponse.json({ message: "El registro que intentas actualizar no existe." }, { status: 404});
            };
            return NextResponse.json({ message: error.message }, { status: 500 });
        };
    };
};

export async function DELETE({ params } : CoffeeParams) {
    try {
        const coffeeId = Number((await params).coffeeId);
        const coffeeDeleted = await prisma.cafe.delete({
            where: {
                id: coffeeId,
            },
        });
        // Aqui no sirve poner una validación ya que directamente salta al catch
        return NextResponse.json({ message: "Registro eliminado con éxito.", data: coffeeDeleted });
    } catch (error) {
        // Es necesario verificar que el error es una instancia de Prisma.PrismaClientKnownRequestError
        // de otra forma no se puede controlar el error.
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(error);
            if(error.code === "P2025") {
                return NextResponse.json({ message: "El registro que intentas eliminar no existe." }, { status: 404});
            };
            return NextResponse.json({ message: error.message }, { status: 500 });
        };
    };
};