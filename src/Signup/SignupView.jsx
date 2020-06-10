import React from "react";
import cookieLogo from "./../resources/images/cookie-logo.png"
import "./SignupView.css";

function SignupView() {



    return <div className="container">
            <img className="image" src={cookieLogo} alt="cookie-logo"/>
            <div className="fields-container">
                <input type="text" placeholder="First Name"/>
                <hr/>
                <input type="text" placeholder="Last Name (Optional)"/>
                <hr/>
                <input type="email" placeholder="Email"/>
                <hr/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>;
}

export default SignupView;