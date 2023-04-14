import { useState, useEffect } from "react";
import { client } from "../../client";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <h1>Blog Page</h1>
        <h2>You are viewing {posts.length} blog posts</h2>
      </section>
    </>
  );
}
