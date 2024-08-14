import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <h1>
                Wellcome
            </h1>
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