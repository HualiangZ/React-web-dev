import Blogs from "../UserData/Blog.json"
import { useNavigate, useParams } from "react-router-dom";
import "../DesignFile/Design.css"

export default function BlogContent(prop){
    const navigate = useNavigate();
    const { CatID, ContID } = useParams()
    return(
        <div class="Container">

            <div class = "PostContainer">    
                <h1 class="PostTitle">
                    {Blogs.Blogs[CatID].Catagory[ContID].key}
                </h1>
                <p class="PostBlog">
                    {Blogs.Blogs[CatID].Catagory[ContID].Blog}
                </p>
            </div>

            <div class="BottomContainer">
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