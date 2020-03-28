import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom';
class Country extends Component {
    state = {  }
    render() { 
        return ( 
        <Link to={`/country/${this.props.countryDetails.name}`}>
        <Card style={{height:"400px",width:"400px", width: '18rem' ,cursor:"pointer",background:this.props.background,borderStyle:this.props.borderStyle,borderColor:this.props.borderColor }}>
        <Card.Img  style={{height:"200px",width:"286px"}} variant="top" src={this.props.countryDetails.flag} />
        <Card.Body>
    <Card.Title style={{fontSize:"1.3vw"}}>{this.props.countryDetails.name}</Card.Title>
          <Card.Text>
           <span style={{fontWeight:"bold"}}>Population:</span>&nbsp;{this.props.countryDetails.population}<br />
           <span style={{fontWeight:"bold"}}>Region:</span>&nbsp;{this.props.countryDetails.region}<br />
           <span style={{fontWeight:"bold"}}>Capital:</span>&nbsp;{this.props.countryDetails.capital}<br />
          </Card.Text>
          
        </Card.Body>
      </Card> 
      </Link>
      );
    }
}
 
export default Country;