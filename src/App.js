import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <div>
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
