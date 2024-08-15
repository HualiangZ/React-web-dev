import Blogs from "../UserData/Blog.json"
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "../DesignFile/Design.css"
export default function BlogPost() {
    const { CatID } = useParams()
    const navigate = useNavigate();
    return(
        <div class = "Container">
            <div class="List">
            {
                Blogs.Blogs[CatID].Catagory.map((value, index) => {
                    return (
                        <button class="PostButton" 
                        onClick={() => navigate(`/blogcontent/${CatID}/${index}`)}
                        >
                            {Blogs.Blogs[CatID].Catagory[index].key}
                        </button>
                    )
                })
            }
            </div>

        <div class = "BottomContainer">
            <button class="Blog"
                style={{background: "#295EF4"}}
                onClick={() => navigate("/blog")}
                >
                    Blog
                </button>

                <button class="Camera"
                    onClick={() => navigate("/camera")}
                >
                    Camera
                </button>

        </div>


        </div>
    )
}
