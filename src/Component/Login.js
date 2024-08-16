import Data from "../Data/Login.json"
import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"


function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function Login() {
        var found = false;
        Data.users.forEach(function (user) {
            if (username === user.username && password === user.password) {
                console.log(true);
                found = true;
                return;
            }
            console.log("no match");
        });

        if (found) {
            navigate("/home");
        } else {
            alert("Password incorrect")
        }

    }

    return (
        <div className="LoginContainer">
            <h1 className="header">
                Wellcome
            </h1>
            <div className="UsernameBox">
                <input type="text"
                    className="Username"
                    placeholder="Username"
                    defaultValue={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div className="PasswordBox">
                <input type="password"
                    className="Password"
                    placeholder="Password"
                    defaultValue={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="Login">
                <button className="LoginButton"
                    onClick={Login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}



export default Login;