import React, { Component } from 'react';

import './App.css';

import Home from './components/Home';
import CountryDetails from './components/countryDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {  }
  render() { 
    return (   
       <Router>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/country/:name" exact component={CountryDetails} />
       </Switch>
     </Router>
    );
}
}
 
export default App;

