import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/actions/user";

const Nav = ({ title, texto }) => {
  const dispatch = useDispatch();

  useEffect(() => {    //ANTES QUE SE CARGUE EL COMPONENTE SE EJECUTA EL DISPATCH
    dispatch(setUser("PERRITO"));
  }, [dispatch]);

  const userName = useSelector((state) => state.user);

  const cambiarNombre = () =>{
      dispatch(setUser("CARLItos"));
  }
  //los parametros van dentro de los ()
  return (
    <nav>
      <button onClick={cambiarNombre}></button>
      <p>{userName.user}</p> {/* asi llamamos a las variables entre {} */}
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
