import React from "react";
import "./NavigationBar.css";
import { connect } from "react-redux";


// Logged in: signout, profile, home
// Logged out: signin, sign up, home

function NavigationBar(props) {
    console.log(props);

    function signout() {
        console.loo("Did click on logout");
    }

    function SignedInList() {
        return <ul className="nav-list">
            <li className={"nav-list-item"}><a href="/home">Home</a></li>
            <li className={"nav-list-item"}><a href="">Profile</a></li>
            <li className={"nav-list-item"}><a href="">Sign out</a></li>     
        </ul>
    }

    function SignedOutList() {
        return <ul className="nav-list">
            <li className={"nav-list-item"}><a href="/home">Home</a></li>
            <li className={"nav-list-item"}><a href="/signin">Sign in</a></li>
            <li className={"nav-list-item"}><a onClick={signout} href="">Sign up</a></li>
        </ul>
    }

    return <div className={"nav-container"}>
        {props.isUserLoggedIn ? <SignedInList /> : <SignedOutList />}
    </div>
}

const mapStateToProps = state => {
    console.log("State has changed");
    console.log(state);
    return { isUserLoggedIn: state.isUserLoggedIn };
    // const { byIds, allIds } = state.todos || {};
    // const todos =
    //   allIds && allIds.length
    //     ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
    //     : null;
    // return { todos };
  };

export default connect(mapStateToProps)(NavigationBar);