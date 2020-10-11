import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import InputBox from "./components/inputBox";
import { Input } from '@material-ui/core';

function App() {
  return (
    <Router>
        <div className="App">
         { <Switch>
            <Route path="/"  exact render={()=>(<InputBox label="Username"></InputBox>)}/>
            <Route path="/login" component={Login}/>
          </Switch>}
        </div>  
    </Router>
  );
}

export default App;
