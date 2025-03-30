export interface Coffee {
    id: number,
    nombre: string,
    ingredientes: string[],
    descripcion: string,
    imagenUrl: string,
};

export interface CoffeeParams {
    // params devuelve una promesa, dentro vienen las propiedades.
    // Esta es la forma en la que se lo define.
    params: Promise<{ coffeeId: number }>,
};
