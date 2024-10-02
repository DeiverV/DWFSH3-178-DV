'use client'
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="px-[20%]">
      <h1 className="text-3xl font-semibold text-center">Posts</h1>
      <ul className="grid gap-2">
        {posts.map(({ body, title, id }) => (
          <li key={id} className="w-full border rounded-md p-2">
            <h6><span className="font-bold">Post Title: </span>{title}</h6>
            <h6 className="font-bold">Post Body:</h6>
            <p className="text-justify text-red-200 lg:text-blue-200">{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
