import React from 'react';
import NavigationBar from "./Components/Pages/NavigationBar/NavigationBar";
import SignupView from "./Components/Pages/Signup/SignupView";
import SigninView from "./Components/Pages/Signin/SigninView"
import Home from "./Components/Pages/Home/Home";
import CreateRecipe from "./Components/Pages/CreateRecipe/CreateRecipe";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <NavigationBar />
        <Route path="/home" component={Home}/>
        <Route path="/signup" component={SignupView}/>
        <Route path="/signin" component={SigninView}/>
        <Route path="/add-recipe" component={CreateRecipe}/>
    </BrowserRouter>
  );
}

export default App;
