import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com"
    }),
    endpoints:(builder) => ({
        getPosts: builder.query({
            query: () => "/posts"
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        setPost: builder.mutation({
            query: (post) =>({
                url: "/posts",
                method: "POST",
                body: post,
            })
        }),
        getPost: builder.query({
            query: () => '/posts'
        })
    })
});

export const {useGetPostsQuery, useGetPostByIdQuery, useSetPostMutation, useGetPostQuery} = baseApi;

export default baseApi