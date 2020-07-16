import React from "react";
import "./NavigationBar.css";
import { connect } from "react-redux";

function NavigationBar(props) {
    console.log("Hello");
    console.log(props.signoutAction);
    function signout() {
        props.signoutAction();
    }

    function SignedInList() {
        return <ul className="nav-list">
            <li className={"nav-list-item"}><a href="/home">Home</a></li>
            <li className={"nav-list-item"}><a href="">Profile</a></li>
            <li className={"nav-list-item"}><button onClick={signout}>Sign out</button></li> 
            {/* <li className={"nav-list-item"}><a href="">Sign out</a></li>      */}
        </ul>
    }

    function SignedOutList() {
        return <ul className="nav-list">
            <li className={"nav-list-item"}><a href="/home">Home</a></li>
            <li className={"nav-list-item"}><a href="/signin">Sign in</a></li>
            <li className={"nav-list-item"}><a href="/signup">Sign up</a></li>
        </ul>
    }

    return <div className={"nav-container"}>
        {props.isUserLoggedIn ? <SignedInList /> : <SignedOutList />}
    </div>
}

const signoutAction = content => ({
    type: "LOGOUT",
});

const mapStateToProps = state => {
    return { 
        isUserLoggedIn: state.isUserLoggedIn
    };
  };

const mapDispatchToProps = {
    signoutAction: signoutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);