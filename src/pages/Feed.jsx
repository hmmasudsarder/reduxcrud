import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useSetPostMutation,
} from "../redux/features/api/baseApi";

const Feed = () => {
  //   const { data: posts, isLoading} = useGetPostsQuery();

  const { register, handleSubmit } = useForm();

  const { data: post, isLoading } = useGetPostByIdQuery(12);
  const [setPost, {data: postData}] = useSetPostMutation();

  console.log(postData);

  const onSubmit = async(data) => {
   const response=await setPost(data);
   console.log(response);

    
  };

  if (isLoading) {
    return <p className="text-3xl text-green-500">Is Loading</p>;
  }
  return (
    <div>
      <h1>Hello</h1>
      <div className="my-10 mx-auto w-1/2">
        <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="w-1/3 rounded-md p-3"
            {...register("post")}
          />
          <button className="text-lg p-3 rounded-md bg-green-200" type="submit">sumit</button>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <PostCard post={post} />
      </div>
    </div>
  );
};

export default Feed;
