import React, { ReactNode } from "react";

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
};

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
    searchParams?: Promise<{}>,
};

export interface ModalProps {
    children: ReactNode,
    isOpen: boolean,
    handleClose: () => void,
}

export interface PostProps {
    post: Post
};

export interface PostParams {
    params: {
        postId: number,
    },
    searchParams?: {},
};