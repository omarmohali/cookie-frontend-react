import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import SignupView from "./Signup/SignupView";
import SigninView from "./Signin/SigninView"
import Home from "./Home/Home"
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
        <NavigationBar />
        <Route path="/home" component={Home}/>
        <Route path="/signup" component={SignupView}/>
        <Route path="/signin" component={SigninView}/>
    </BrowserRouter>
  );
}

export default App;
