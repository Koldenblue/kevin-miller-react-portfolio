// the bootstrap stylesheet should be imported first, so that the custom styles cascade and take precedence
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/style.css"
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
