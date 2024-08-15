import Blogs from "../Data/Blog.json"
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "../DesignFile/Design.css"
export default function BlogPost() {
    const { CatID } = useParams()
    const navigate = useNavigate();
    return(
        <div className = "Container">
            <div className="List">
            {
                Blogs.Blogs[CatID].Catagory.map((value, index) => {
                    return (
                        <button className="PostButton" 
                        onClick={() => navigate(`/blogcontent/${CatID}/${index}`)}
                        >
                            {Blogs.Blogs[CatID].Catagory[index].key}
                        </button>
                    )
                })
            }
            </div>

        <div className = "BottomContainer">
            <button className="Blog"
                style={{background: "#295EF4"}}
                onClick={() => navigate("/blog")}
                >
                    Blog
                </button>

                <button className="CamButton"
                    onClick={() => navigate("/camera")}
                >
                    Camera
                </button>

        </div>


        </div>
    )
}
