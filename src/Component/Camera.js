import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"

export default function Camera(){
    const navigate = useNavigate();
    return(
        <div class = "Container">

            <h1>camera</h1>
            <div class = "BottomContainer">
                <button class="Blog"
                    onClick={() => navigate("/blog")}
                >
                    Blog
                </button>

                <button class="Camera"
                style={{background: "#295EF4"}}
                    onClick={() => navigate("/camera")}
                >
                    Camera
                </button>
            </div>
        </div>
        
    )
}