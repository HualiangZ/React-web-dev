import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="Container">
            <h1 className="header">
                Wellcome
            </h1>
            <div className="BottomContainer">
                <button className="Blog"
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
