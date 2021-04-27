import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ title, texto }) => {
  //los parametros van dentro de los ()

  return (
    <nav>
      <button onClick={texto}></button>
      <p>{title}</p> {/* asi llamamos a las variables entre {} */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
