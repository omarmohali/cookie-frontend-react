import React from 'react';
import SignupView from "./Signup/SignupView";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Route path="/signup" component={SignupView}/>
    </BrowserRouter>

  );
}

export default App;
