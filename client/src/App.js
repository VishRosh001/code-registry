import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
        <div className="App">
         { <Switch>
            <Route path="/"  exact component={Register}/>
            <Route path="/login" component={Login}/>
          </Switch>}
        </div>  
    </Router>
  );
}

export default App;
