import React from "react"

import {email_icon} from "../assets/iconoir_at-sign.png"
import {password_icon} from "../assets/Lock_Password_Icon_UIA.png"
import {logo} from "../assets/Agromy.png"
import {image} from "../assets/Woman.png"

const Loginpage = () => {
  return (
    <div className="container">
        <div className="logo">
            <image src={logo} />
        </div>
        <div className="header">
            <h1>Welcome back to Agromy</h1>
            <p>Your trusted digital marketplace for agriculture</p>
        </div>
        <div className="inputs">
            <div className="input">
                <image src={email_icon} alt="emailicon"/>
                <input type="email"/>
                <input type="phonenumber"/>
            </div>
        </div>
         <div className="inputs">
            <div className="input">
                <image src={password_icon} alt="passwordicon"/>
                <input type="password"/>
            </div>
            <h6>Forgot Password?</h6>
        </div>
        <div className="button">
            <button type="Submit">Login</button>
        </div>
        <div className="Signup">
            <p>Dont have an account?<a href="#Signup">SignUp</a></p>
        </div>
        
        <div className="Image">
            <image src={image} alt="woman"/>
        </div>
    </div>
  );
};

export default Loginpage;