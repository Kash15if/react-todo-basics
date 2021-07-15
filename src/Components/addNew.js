import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Create = (props) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content };

    fetch("http://localhost:5000/data" + (error ? "" : "/" + id), {
      method: error ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/data/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const err = data.title ? false : true;
        setError(err);
        console.log(error);
        setTitle(data.title);
        setContent(data.content);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <input
          type="text"
          id="fname"
          name="fname"
          value={title ? title : ""}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        {title}
      </div>

      <br />

      <div className="content">
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          value={content ? content : ""}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        {content}
      </div>
      <button className="submit">Submit</button>
    </form>
  );
};

export default Create;
