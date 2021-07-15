import { Link } from "react-router-dom";

const Blog = ({ blog, handleDelete }) => {
  return (
    <div className="cardBody" key={blog.id}>
      <div className="delete">
        <i className="material-icons" onClick={() => handleDelete(blog.id)}>
          delete
        </i>
      </div>
      <h2>
        <Link to={"blogs/" + blog.id} className="link">
          {" "}
          {blog.title}
        </Link>
      </h2>
      <div className="cardText">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default Blog;
