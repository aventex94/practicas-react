import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import User from "./components/layout/User"
const Routes = () => {
  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  const [texto,setTexto] = useState('Hola Mundo');
  const [productos, setProductos] = useState([]); // ACA SE CARGA EL STORE

  const handleChange = useCallback(() =>{
      setTexto('Hola Casa')
  },[])


  return (
    <Router>
      <div>
          {texto}
        <Nav title={ 'Esto es el titulo' } texto={handleChange}/>

        <Switch>
          <Route path="/home">
            {/* EL HOME PASA A SER COMPONENTE */}
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <User/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
