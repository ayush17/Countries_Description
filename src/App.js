import React, { Component } from 'react';

import './App.css';

import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {  }
  render() { 
    return (   
       <Router>
       <Switch>
         <Route path="/" exact component={Home} />
         {/* <Route path="/board/:id" exact component={Lists} /> */}
       </Switch>
     </Router>
    );
}
}
 
export default App;

