// the bootstrap stylesheet should be imported first, so that the custom styles cascade and take precedence
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/style.css";
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Chemistry from './pages/Chemistry';
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Pictures from './pages/Pictures';


function App() {
  return (
    <Router>
        <NavBar />
      <Switch>
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/chemistry' component={Chemistry}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/pictures' component={Pictures} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
