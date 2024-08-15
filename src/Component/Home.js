import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"

export default function Home(){
    const navigate = useNavigate();

    return(
        <div class = "Container">
            <h1 class = "header">
                Wellcome
            </h1>
            <div class = "BottomContainer">
                <button class="Blog"
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
