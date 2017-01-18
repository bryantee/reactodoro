import React from 'react';
import { Link } from 'react-router';

const Title = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <Link to="pomo">
          <h1 className="navbar-brand">Reactodoro</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Title;
