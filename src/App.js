// the bootstrap stylesheet should be imported first, so that the custom styles cascade and take precedence
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/style.css"
import React from 'react';


import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
