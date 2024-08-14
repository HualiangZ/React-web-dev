import Blogs from "../UserData/Blog.json"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function BlogPost() {
    const [i , setI] = useState();
    const navigate = useNavigate();
    return(
        <div>
            <ul className="list-unstyled" style ={{listStyle:'none'}}>
            {
                Blogs.Blogs[0].Catagory.map((value, index) => {
                    return (
                        <li key={index} >
                            <button className="button" 
                            onClick={() => console.log(Blogs.Blogs[index])}
                            >
                                {Blogs.Blogs[0].Catagory[index].key}
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
