import Blogs from "../Data/Blog.json"
import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"

export default function Blog() {
    const navigate = useNavigate();

    return(
            <div className = "Container">
                <div className = "List">
                    {
                        Blogs.Blogs.map((value, index) => {
                            return (
                                <button className="CatagoryButton" 
                                onClick={()=>navigate(`/blogpost/${index}`)}
                                >
                                    {Blogs.Blogs[index].key}
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


