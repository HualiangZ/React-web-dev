import Blogs from "../UserData/Blog.json"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Blog() {
    const [i , setI] = useState();
    const navigate = useNavigate();
    return(
        <div>
            <ul className="list-unstyled" style ={{listStyle:'none'}}>
            {
                Blogs.Blogs.map((value, index) => {
                    return (
                        <li key={index} >
                            <button className="button" 
                            onClick={() => <BlogCat/>}
                            >
                                blog catagory: {index + 1}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <button className="Blog"
                onClick={() => navigate("/blog")}
            >
                Blog
            </button>

            <button className="Camera"
                onClick={() => navigate("/camera")}
            >
                Camera
            </button>
        </div>
    )
}

function BlogCat(index){
    return(
        <h1>index</h1>
    )
}