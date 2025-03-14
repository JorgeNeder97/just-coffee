import PostCard from "@/components/PostCard";
import RedirectionButton from "@/components/RedirectionButton";
import { Post } from "@/models/data";
import Link from "next/link";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();

    // This simulate delay time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data;
}


const AboutUs = async () => {

    const posts = await getPosts();

    return (
        <div className="w-full">
            <h2>About Us</h2>
            
            <div className="w-full my-5 flex place-items-center place-content-center">
                <RedirectionButton />
            </div>

            <div className="w-full flex flex-wrap place-content-center my-10 mx-auto gap-[50px]">
                {
                    posts.map((post:Post) => (
                        <Link href={`/about/${post.id}`} key={post.userId + post.id}>
                            <PostCard post={post} />
                        </Link>
                    ))
                }
            </div>
             
        </div>
    );
};

export default AboutUs;
