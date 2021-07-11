import { useState } from "react";
import Blog from './blog';

const Todo = () => {


    const[blogs, setBlogs] = useState([
        {
            "id": 1,
            "name": "Harry Potter",
            "city": "London"
          },
          {
            "id": 2,
            "name": "Don Quixote",
            "city": "Madrid"
          },
          {
            "id": 3,
            "name": "Joan of Arc",
            "city": "Paris"
          },
          {
            "id": 4,
            "name": "Rosa Park",
            "city": "Alabama"
          }
          ]);

    
        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }
    
    return ( 
           

   <div className="flexCont">

       {
           blogs.map((blog)=>(
            <Blog blog={blog} handleDelete={handleDelete}/>
            ))
       }
   
  </div>
     );
}
 
export default Todo;