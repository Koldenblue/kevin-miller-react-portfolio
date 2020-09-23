// the bootstrap stylesheet should be imported first, so that the custom styles cascade and take precedence
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/style.css"
import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Button className='myBtn' variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
