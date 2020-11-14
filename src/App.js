import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import LoginCreate from "./Pages/Login/LoginCreate/LoginCreate";

const App = () => {
  return (
    <div className="App-header">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>


      </Switch>
      <Footer />
    </div>
  );
};

export default App;
