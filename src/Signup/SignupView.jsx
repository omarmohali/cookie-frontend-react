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
    var [showFirstNameError, setShowFirstNameError] = React.useState(false);
    var [showEmailError, setShowEmailError] = React.useState(false);
    var [showPasswordError, setShowPasswordError] = React.useState(false);
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
                if (statusCode == 400) {
    
                } else if (statusCode == 409) {
    
                } else {
    
                }
                
                console.log(err.response.data);
            }
        }
    }

    function areAllFieldsCorrectlySet() {
        return firstName && email && validator.isEmail(email) && password;
    }

    function showErrors() {
        setShowFirstNameError(firstName ? false : true);
        setShowEmailError(email && validator.isEmail(email) ? false : true);
        setShowPasswordError(password ? false : true);
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
            <input className={showFirstNameError ? "field-error" : ""} onChange= { firstNameChanged } type="text" placeholder="First Name"/>
            <input onChange= { lastNameChanged } type="text" placeholder="Last Name (Optional)"/>
            <input className={showEmailError ? "field-error" : ""} onChange= { emailChanged } type="email" placeholder="Email"/>
            <input className={showPasswordError ? "field-error" : ""} onChange= { passwordChanged } type="password" placeholder="Password"/>
            <button onClick={ signupButtonClicked }><ButtonLoading loading={buttonIsLoading}/>Sign Up</button>
        </div>;
}

export default SignupView;