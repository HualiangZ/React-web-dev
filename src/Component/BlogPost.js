import Blogs from "../UserData/Blog.json"
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function BlogPost() {
    const { CatID } = useParams()
    const navigate = useNavigate();
    return(
        <div>
            <h1>
                {Blogs.Blogs[CatID].key}
            </h1>

            <ul className="list-unstyled" style ={{listStyle:'none'}}>
            {
                Blogs.Blogs[CatID].Catagory.map((value, index) => {
                    return (
                        <li key={index} >
                            <button className="button" 
                            onClick={() => navigate(`/blogcontent/${CatID}/${index}`)}
                            >
                                {Blogs.Blogs[CatID].Catagory[index].key}
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
