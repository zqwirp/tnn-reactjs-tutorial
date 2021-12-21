import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then(response => {
          if (!response.ok) {
            throw new Error("could not fetch the data");
          }
          return response.json();
        })
        .then(data => {
          setError(null);
          setIsPending(false);
          setBlogs(data);
        })
        .catch(error => {
          setIsPending(false);
          setError(error.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
