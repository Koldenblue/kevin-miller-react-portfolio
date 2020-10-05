// the bootstrap stylesheet should be imported first, so that the custom styles cascade and take precedence
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/style.css"
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Chemistry from './pages/Chemistry/Chemistry';
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Pictures from './pages/Pictures/Pictures';


function App() {
  return (
    <Router>

        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/chemistry' component={Chemistry}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/pictures' component={Pictures} />

    </Router>
  );
}

export default App;
