import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import AddCode from "./pages/addCode";
import RegistryTab from "./components/registryTab";
import ShowSnippet from "./pages/showSnippet";

function App() {
  return (
    <Router>
        <div className="App">
         { <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/postSnip" component={AddCode}/>
            <Route path="/tab" component={RegistryTab}/>
            <Route path="/show" component={ShowSnippet}/>
          </Switch>}
        </div>  
    </Router>
  );
}

export default App;
