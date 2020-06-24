import React from "react";
import "./NavigationBar.css";


function NavigationBar() {
    return <div className={"nav-container"}>
        <ul className="nav-list">
            <li className={"nav-list-item"}><a href="/signin">Sign in</a></li>
            <li className={"nav-list-item"}><a href="">Discover</a></li>
            <li className={"nav-list-item"}><a href="">Profile</a></li>
        </ul>
    </div>
}


export default NavigationBar;