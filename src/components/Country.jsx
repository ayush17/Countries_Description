import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import {ThemeContext,themes} from './themeContext'
import { Link } from 'react-router-dom';
class Country extends Component {
    state = {  }
    render() { 
        return ( 
          <ThemeContext.Consumer>
           { theme=>(  <Link 
          to={`/country/${this.props.countryDetails.capital}`}
          style={{ color: theme.textColor, textDecoration: 'none',width:"100%" }}>
          <Card style={{height:"360px"  ,cursor:"pointer",background:theme.headerBackground,boxShadow:theme.boxShadow,border:"none" }}>
          <Card.Img  style={{height:"200px"}} variant="top" src={this.props.countryDetails.flag} />
          <Card.Body>
      <Card.Title style={{fontSize:"1vw"}}>{this.props.countryDetails.name}</Card.Title>
            <Card.Text>
             <span style={{fontWeight:"bold" ,fontSize:"1vw"}}>Population:</span>&nbsp;{this.props.countryDetails.population}<br />
             <span style={{fontWeight:"bold",fontSize:"1vw"}}>Region:</span>&nbsp;{this.props.countryDetails.region}<br />
             <span style={{fontWeight:"bold",fontSize:"1vw"}}>Capital:</span>&nbsp;{this.props.countryDetails.capital}<br />
            </Card.Text>
          </Card.Body>
        </Card> 
        </Link>)}
      </ThemeContext.Consumer>
         
      );
    }
}
 
export default Country;