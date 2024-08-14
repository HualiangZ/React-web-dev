import { useNavigate } from "react-router-dom";

export default function Camera(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>camera</h1>
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