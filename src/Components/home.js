import { useEffect, useState } from "react";
import Blog from "./blog";
import { Link } from "react-router-dom";

const Todo = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);

    fetch("http://localhost:5000/data/" + id, {
      method: "DELETE",
    }).then(() => console.log("deleted"));
  };

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div>
      <Link to="blogs/">
        <button className="new">Create New</button>
      </Link>
      <div className="flexCont">
        {blogs &&
          blogs.map((blog) => <Blog blog={blog} handleDelete={handleDelete} />)}
      </div>
    </div>
  );
};

export default Todo;
