const Blog = ({blog, handleDelete}) => {


    return ( 
            <div className="cardBody" key={blog.id}>
            <div className="delete">
                <i className="material-icons" onClick={()=>handleDelete(blog.id)}>delete</i>
            </div>
            <h2> name: {blog.name}</h2>
                <div className="cardText">
                    <p>
                       city:  {blog.city}
                    </p>
                </div>
            </div>
            )
}
 
export default Blog;