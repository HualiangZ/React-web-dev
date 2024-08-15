import Blogs from "../Data/Blog.json"
import { useNavigate, useParams } from "react-router-dom";
import "../DesignFile/Design.css"

export default function BlogContent(prop){
    const navigate = useNavigate();
    const { CatID, ContID } = useParams()
    return(
        <div className="Container">

            <div className = "PostContainer">    
                <h1 className="PostTitle">
                    {Blogs.Blogs[CatID].Catagory[ContID].key}
                </h1>
                <p className="PostBlog">
                    {Blogs.Blogs[CatID].Catagory[ContID].Blog}
                </p>
            </div>

            <div className="BottomContainer">
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