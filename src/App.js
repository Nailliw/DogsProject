import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="App-header">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
