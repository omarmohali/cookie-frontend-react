import React from "react";
import cookieLogo from "./../resources/images/cookie.png"
import "./SigninView.css";
import signin from "./../network-layer/signin-request"
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

function SigninView(props) {
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [emailError, setEmailError] = React.useState(null);
    var [passwordError, setPasswordError] = React.useState(null);
    var [wrongCredentialsError, setWrongCredentialsError] = React.useState(null);
    var [buttonIsLoading, setButtonIsLoading] = React.useState(false);

    
    let history = useHistory();
    

    function emailChanged(event) {
        setEmail(event.target.value);
    }

    function passwordChanged(event) {
        setPassword(event.target.value);
    }

    async function signinButtonClicked() {
        
        showErrors()
        if (areAllFieldsCorrectlySet()) {
            setButtonIsLoading(true);
            try {
                const response = await signin(email, password);
                setButtonIsLoading(false);
                console.log(props.signinAction)
                props.signinAction();
                history.push("/home");

            } catch (err) {
                setButtonIsLoading(false);
                if (err.response) {
                    const statusCode = err.response.status;
                    if (statusCode === 401) {
                        setWrongCredentialsError("Wrong email or password");
                    }
                }
            }
        }
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
        } else {
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
            <button className="signin-button" onClick={ signinButtonClicked }><ButtonLoading loading={buttonIsLoading}/>Sign-In</button>
            <p className={!wrongCredentialsError ? "" : "server-error-label"}>{wrongCredentialsError}</p>
        </div>;
}

const signinAction = content => ({
  type: "LOGIN",
});

export default connect(
    null,
    { signinAction }
  )(SigninView);