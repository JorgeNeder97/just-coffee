"use client";

import { Post, PostProps } from "@/models/data";

const PostCard:React.FC<PostProps> = ({ post }) => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        alert('El componente PostCard utiliza CSR');
    };

    return (
        <div className="bg-zinc-300 rounded-xl text-black flex flex-col px-4 py-2 overflow-hidden w-[250px] h-[400px] gap-[30px]">
            <h4>{post.id + ". " + post.title}</h4>
            <p>{post.body}</p>
            <button className="bg-black text-white rounded-2xl px-2 py-1 hover:cursor-pointer" onClick={handleClick}>Generate Alert</button>
        </div>
    );
};

export default PostCard;
