import React, { Component } from 'react';
import Country from './Country';
import Header from './Header';
class Home extends Component {
    state = { countries:[] }
    componentDidMount() {
        fetch(
          `https://restcountries.eu/rest/v2/all`
        )
          .then(response => response.json())
          .then(countryDetails => {
            this.setState({ countries: countryDetails });
          });
      }
    render() { 
        return ( <React.Fragment>
            <Header />
            <Country />
            </React.Fragment> ); 
    }
}
 
export default Home;