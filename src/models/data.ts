export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
};

export interface PostProps {
    post: Post
};

export interface PostParams {
    params: {
        postId: number,
    },
    searchParams?: {},
};