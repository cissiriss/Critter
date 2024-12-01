import { useEffect, useState } from "react";
import DeletePost from "./DeletePost";

export interface Posts {
  id: number;
  display_name: string;
  title: string;
  description: string;
  created_at: string;
}

export default function GetPosts() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data: Posts[]) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          id="post"
          className="border border-base-100 rounded-box p-10 mt-10 mb-10 bg-base-100"
          key={post.id}
        >
          <h4 id="post-title" className="text-2xl">
            {post.title}
          </h4>
          <p id="post-name" className="text-lg">{`By: ${post.display_name}`}</p>
          <p
            id="post-date"
            className="text-xs"
          >{`Posted: ${post.created_at}`}</p>

          <p id="post-description" className="mt-4 mb-4">
            {post.description}
          </p>
          <DeletePost id={post.id} />
        </div>
      ))}
    </div>
  );
}
