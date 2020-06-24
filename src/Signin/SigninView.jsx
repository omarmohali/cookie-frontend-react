import React from "react";
import validator from "validator";
import cookieLogo from "./../resources/images/cookie.png"
import "./SigninView.css";
import signup from "./../network-layer/signup-request"

function SigninView() {

    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [emailError, setEmailError] = React.useState(null);
    var [passwordError, setPasswordError] = React.useState(null);
    var [buttonIsLoading, setButtonIsLoading] = React.useState(false);

    function emailChanged(event) {
        setEmail(event.target.value);
    }

    function passwordChanged(event) {
        setPassword(event.target.value);
    }

    async function signinButtonClicked() {

        

        showErrors()

        if (areAllFieldsCorrectlySet()) {
            console.log("Should sign in now");
        }

        // if (areAllFieldsCorrectlySet()) {
        //     setButtonIsLoading(true);
        //     try {
        //         const response = await signup(firstName, lastName, email, password);
        //         setButtonIsLoading(false);
        //         console.log(response);
        //     } catch (err) {
        //         setButtonIsLoading(false);
        //         const statusCode = err.response.status;
        //         if (statusCode == 400) {
    
        //         } else if (statusCode == 409) {
        //             setEmailError("This email is already taken");
        //         } else {
    
        //         }
                
        //         console.log(err.response.data);
        //     }
        // }
    }

    function areAllFieldsCorrectlySet() {
        return email && password;
    }

    function showErrors() {
        if (!email) {
            setEmailError("Please enter your email address");
        } else {
            setEmailError(null);
        }

        if (!password) {
            setPasswordError("Please enter your password");
        } else  {
            setPasswordError(null);
        }
    }

    function ButtonLoading(props) {
        if (props.loading) {
            return <i className={"fa fa-circle-o-notch fa-spin"}></i>;
        }
        else {
            return <i />
        }
    }

    return <div className="container">
            <img className="image" src={cookieLogo} alt="cookie-logo"/>
            <h1 className="title">Cookie</h1>
            <h3 className="subtitle">Share and Discover Recipes</h3>
            <input className={emailError ? "field-error" : ""} onChange= { emailChanged } type="email" placeholder="Email"/>
            <p className={!emailError ? "" : "field-error-label"}>{emailError}</p>
            <input className={passwordError ? "field-error" : ""} onChange= { passwordChanged } type="password" placeholder="Password"/>
            <p className={!passwordError ? "" : "field-error-label"}>{passwordError}</p>
            <button onClick={ signinButtonClicked }><ButtonLoading loading={buttonIsLoading}/>Sign-In</button>
        </div>;
}

export default SigninView;