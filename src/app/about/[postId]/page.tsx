import PostCard from "@/components/PostCard";
import { PostParams } from "@/models/data";

async function loadPost(postId:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = res.json();
    return data;
}

const post: React.FC<PostParams> = async ({ params }) => {

    const post = await loadPost(params.postId);

    return (
        <div className="w-screen h-[80vh] flex place-content-center place-items-center">
            <PostCard post={post} />
        </div>
    );
};

export default post;
