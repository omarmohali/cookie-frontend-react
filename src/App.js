import React from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import SignupView from "./Signup/SignupView";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <NavigationBar />
        <Route path="/signup" component={SignupView}/>
    </BrowserRouter>

  );
}

export default App;
