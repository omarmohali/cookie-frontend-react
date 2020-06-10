import React from "react";
import cookieLogo from "./../resources/images/cookie-logo.png"
import "./SignupView.css";
import registerUser from "./../network-layer/registration-network.js"

function SignupView() {

    var [firstName, setFirstName] = React.useState("");
    var [lastName, setLastName] = React.useState("");
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");

    function firstNameChanged(event) {
        setFirstName(event.target.value)
    }

    function lastNameChanged(event) {
        setLastName(event.target.value)
    }

    function emailChanged(event) {
        setEmail(event.target.value)
    }

    function passwordChanged(event) {
        setPassword(event.target.value)
    }

    function signupButtonClicked() {
        registerUser(firstName, lastName, email, password);
    }

    return <div className="container">
            <img className="image" src={cookieLogo} alt="cookie-logo"/>
            <div className="fields-container">
                <input onChange= { firstNameChanged } type="text" placeholder="First Name"/>
                <hr/>
                <input onChange= { lastNameChanged } type="text" placeholder="Last Name (Optional)"/>
                <hr/>
                <input onChange= { emailChanged } type="email" placeholder="Email"/>
                <hr/>
                <input onChange= { passwordChanged } type="password" placeholder="Password"/>
            </div>
            <button onClick={ signupButtonClicked }>Sign Up</button>
        </div>;
}

export default SignupView;