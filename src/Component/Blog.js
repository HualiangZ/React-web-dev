import Blogs from "../UserData/Blog.json"
import { useNavigate } from "react-router-dom";

export default function Blog() {
    const navigate = useNavigate();

    function Buttons({index}){
        return(
            <div>
                <button className="button" 
                onClick={()=>navigate(`/blogpost/${index}`)}
                >
                    {Blogs.Blogs[index].key}
                </button>
            </div>
        )

    }
    
    return(
        <div>
            <ul className="list-unstyled" style ={{listStyle:'none'}}>
            {
                Blogs.Blogs.map((value, index) => {
                    return (
                        <li key={index} >
                            <Buttons index={index}/>
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


