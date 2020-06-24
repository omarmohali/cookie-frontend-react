import React from "react";
import validator from "validator";
import cookieLogo from "./../resources/images/cookie.png"
import "./SignupView.css";
import signup from "./../network-layer/signup-request"

function SignupView() {

    var [firstName, setFirstName] = React.useState("");
    var [lastName, setLastName] = React.useState("");
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [firstNameError, setFirstNameError] = React.useState(null);
    var [emailError, setEmailError] = React.useState(null);
    var [passwordError, setPasswordError] = React.useState(null);
    var [buttonIsLoading, setButtonIsLoading] = React.useState(false);

    function firstNameChanged(event) {
        setFirstName(event.target.value)
    }

    function lastNameChanged(event) {
        setLastName(event.target.value);
    }

    function emailChanged(event) {
        setEmail(event.target.value);
    }

    function passwordChanged(event) {
        setPassword(event.target.value);
    }

    async function signupButtonClicked() {

        showErrors()

        if (areAllFieldsCorrectlySet()) {
            setButtonIsLoading(true);
            try {
                const response = await signup(firstName, lastName, email, password);
                setButtonIsLoading(false);
                console.log(response);
            } catch (err) {
                setButtonIsLoading(false);
                const statusCode = err.response.status;
                if (statusCode === 400) {
    
                } else if (statusCode === 409) {
                    setEmailError("This email is already taken");
                } else {
    
                }
                
                console.log(err.response.data);
            }
        }
    }

    function areAllFieldsCorrectlySet() {
        return firstName && email && validator.isEmail(email) && password && password.length > 7;
    }

    function showErrors() {
        if (!firstName) {
            setFirstNameError("Please enter your first name");
        } else {
            setFirstNameError(null);
        }
        
        if (!email) {
            setEmailError("Please enter your email address");
        } else if (!validator.isEmail(email)) {
            setEmailError("Please enter a valid email")
        } else {
            setEmailError(null);
        }

        if (!password) {
            setPasswordError("Please enter your password");
        } else if (password.length < 8) {
            setPasswordError("Password length should be at least 8 character");
        } else {
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
            <input className={firstNameError ? "field-error" : ""} onChange= { firstNameChanged } type="text" placeholder="First Name"/>
            <p className={!firstNameError ? "" : "field-error-label"}>{firstNameError}</p>
            <input onChange= { lastNameChanged } type="text" placeholder="Last Name (Optional)"/>
            <input className={emailError ? "field-error" : ""} onChange= { emailChanged } type="email" placeholder="Email"/>
            <p className={!emailError ? "" : "field-error-label"}>{emailError}</p>
            <input className={passwordError ? "field-error" : ""} onChange= { passwordChanged } type="password" placeholder="Password"/>
            <p className={!passwordError ? "" : "field-error-label"}>{passwordError}</p>
            <button onClick={ signupButtonClicked }><ButtonLoading loading={buttonIsLoading}/>Sign Up</button>
        </div>;
}

export default SignupView;