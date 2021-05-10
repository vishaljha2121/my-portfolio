import "./App.css";
import React from "react";

import NavBar from "./componets/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Projects from "./pages/project.js";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
