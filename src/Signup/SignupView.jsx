import React from "react";
import cookieLogo from "./../resources/images/cookie-logo.png"

function SignupView() {

    const containerStyle = {
        textAlign: "center"
    }

    const imageStyle = {
        height: "300px",
        width: "300px",
    };

    const fieldsContainerStyle = {
        backgroundColor: "#EDEDED",
        width: "350px",
        height: "215px",
        margin: "auto",
        borderRadius: "10px",
        // textAlign: "center"
    }

    const textFieldStyles = {
        display: "block",
        width: "90%"
    }

    return <div style={ containerStyle } >
            <img style={ imageStyle } src={cookieLogo} alt="cookie-logo"/>
            <div style={ fieldsContainerStyle }>
                <input style={ textFieldStyles } type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name (Optional)"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>;
}

export default SignupView;