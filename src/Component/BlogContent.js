import Blogs from "../UserData/Blog.json"
import { useNavigate, useParams } from "react-router-dom";

export default function BlogContent(prop){
    const navigate = useNavigate();
    const { CatID, ContID } = useParams()
    return(
        <div>
            <h1>
                {Blogs.Blogs[CatID].Catagory[ContID].key}
            </h1>
            <p>
                {Blogs.Blogs[CatID].Catagory[ContID].Blog}
            </p>
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