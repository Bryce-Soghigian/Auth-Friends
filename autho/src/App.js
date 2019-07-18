import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import  Login from './Components/Login'

const App = () => {
  return (
    <div>
 Please login below
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
    </div>
  );

  }

export default App;
