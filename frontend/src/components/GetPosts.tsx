import { useEffect, useState } from "react";

export interface Posts {
  id: number;
  display_name: string;
  title: string;
  content: string;
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
          className="border border-base-100 rounded-box p-10 mt-10 mb-10 bg-base-100"
          key={post.id}
        >
          <h4 className="text-2xl">{post.title}</h4>
          <p className="text-lg">{`By: ${post.display_name}`}</p>
          <p className="text-xs">{`Posted: ${post.created_at}`}</p>

          <p className="mt-4 mb-4">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
