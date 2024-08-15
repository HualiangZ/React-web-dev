import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import "../DesignFile/Design.css"


export default function Camera() {
    const navigate = useNavigate();
    const video = useRef(null);
    const photo = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: true,
            })
            .then((mediaStream) => {
                const v = video.current;
                v.srcObject = mediaStream;
                v.onloadedmetadata = () => {
                    v.play();
                };
            })
            .catch((err) => {
                console.error(`${err.name}: ${err.message}`);
            });
    }

    const TakePhoto = () => {
        const v = video.current;
        const p = photo.current;
        var context = p.getContext("2d");
        context.drawImage(v, 0, 0, p.width, p.height);

    }

    useEffect(() => {
        getVideo();
    }, [video])


    return (
        <div className="Container">

            <div className="CameraFeed">
                <video ref={video}></video>
                <button onClick={TakePhoto}>
                    Take Picture
                </button>

            </div>

            <canvas ref={photo}></canvas>

            <div className="BottomContainer">
                <button className="Blog"
                    onClick={() => navigate("/blog")}
                >
                    Blog
                </button>

                <button className="CamButton"
                    style={{ background: "#295EF4" }}
                    onClick={() => navigate("/camera")}
                >
                    Camera
                </button>
            </div>
        </div>

    )
}