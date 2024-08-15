import Data from "../UserData/Login.json"
import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../DesignFile/Design.css"
function Login()
{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function Login(){
        var found = false;
        Data.users.forEach(function(user){
            if(username === user.username && password === user.password){
                console.log(true);
                found = true;
                return;
            }
            console.log("no match");
        });

        if(found){
            Data.auth = true;
            navigate("/home");
        }else{
            alert("Password incorrect")
        }
        
    }
  
    return (
      <div class="LoginContainer">
            <h1 class="header">
                Wellcome
            </h1>
            <div class="UsernameBox">
                <input type="text" 
                class="Username"
                placeholder="Username" 
                defaultValue={username} 
                onChange={e => setUsername(e.target.value)}
                />
            </div>
  
            <div class="PasswordBox">
                <input type="text" 
                class="Password"
                placeholder="Password" 
                defaultValue={password} 
                onChange={e => setPassword(e.target.value)}
                />
            </div>
  
            <div class = "Login">
                <button class="LoginButton"
                onClick={Login}
                >
                    Login
                </button>
            </div>
      </div>
    );
}



export default Login;