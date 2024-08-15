import Blogs from "../UserData/Blog.json"
import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"

export default function Blog() {
    const navigate = useNavigate();

    return(
            <div class = "Container">
                <div class = "List">
                    {
                        Blogs.Blogs.map((value, index) => {
                            return (
                                <button class="CatagoryButton" 
                                onClick={()=>navigate(`/blogpost/${index}`)}
                                >
                                    {Blogs.Blogs[index].key}
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


