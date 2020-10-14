import React from 'react';

export default function ProjectList(props) {

  return (
    <ul>
      <li style={{ color: 'purple' }}>
        <span style={{ color: 'black' }}>Check out the <a href="https://github.com/Koldenblue/Express-Bartender" className="card-link">GitHub </a>repository for a project summary</span>
      </li>
      <li>
        Express yourself on the <a href="https://team-express-bartender.herokuapp.com/" className="card-link">website</a>! The username 'kevin@kevin.com' and password '10Characters!' may be used in leiu of signing up.
      </li>
    </ul>
  )
}
