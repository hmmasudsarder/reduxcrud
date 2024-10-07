
const PostCard = ({post}) => {
    return (
        <div className="bg-zinc-800 rounded-md p-10 text-zinc-300">
            <h2 className="text-xl mb-5 font-semibold hover:underline cursor-pointer">
                {post?.id}
            </h2>
            <h2 className="text-xl mb-5 font-semibold hover:underline cursor-pointer">
                {post?.title}
            </h2>
            <p className="">{post?.body}</p>
        </div>
    );
};

export default PostCard;