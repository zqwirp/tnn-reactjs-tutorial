import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>BlogDetails - { id }</h2>
    </div>
  );
}

export default BlogDetails;
