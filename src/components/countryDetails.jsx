import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import {ArrowLeftOutlined } from '@ant-design/icons'
class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: []
    };
  }

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/capital/${this.props.capital}`)
      .then(countryData => countryData.json())
      .then(countryData => {
        this.setState({
          country: countryData
        });
      })
      
  }

  render() {
    return (
        <div style={{color:this.props.color,height:"100%"}} >
          {this.state.country.length === 0 ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h1> Loading... </h1>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <div style={{ alignSelf: 'start' }}>
                <Link to="/" style={{textDecoration:"none"}}>
                  <button
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 5,
                      border:"none",
                      background:this.props.background,
                      textDecoration:"none",
                      color:this.props.color
                    }}
                  >
                   Back
                  </button>
                </Link>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 40
                }}
              >
                <div>
                  <img
                    src={`${this.state.country[0].flag}`}
                    alt="flag"
                    style={{ width: 500 ,height:300}}
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div>
                    <h1 style={{color:this.props.color}} >
                      {this.state.country[0].name}
                    </h1>
                  </div>
                  <div style={{ display: 'flex', lineHeight: 1.8 }}>
                    <div style={{  }}>
                      <div>
                        <b>Native Name</b>: {this.state.country[0].nativeName}
                      </div>
                      <div>
                        <b>Population</b>: {this.state.country[0].population}
                      </div>
                      <div>
                        <b>Region</b>: {this.state.country[0].region}
                      </div>
                      <div>
                        <b>Sub Region</b>: {this.state.country[0].subregion}
                      </div>
                      <div>
                        <b>Capital</b>: {this.state.country[0].capital}
                      </div>
                    </div>
                    <div>
                      <div>
                        <b>Top Level Domain </b>:
                        {`  ${this.state.country[0].topLevelDomain}`}
                      </div>
                      <div>
                        <b>Currencies</b>:{' '}
                        {this.state.country[0].currencies[0].name}
                      </div>
                      <div>
                        <b>Languages</b>:{' '}
                        {this.state.country[0].languages.map(
                          language => `${language.name}, `
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ marginTop: 60 }}>
                      <b>Border Countries</b>:{' '}
                      {this.state.country[0].borders.map(border => (
                        <button
                          style={{
                            marginLeft: 10,
                            background:this.props.background,
                           color:this.props.color,
                            border: 0
                          }}
                        >
                          {border}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    );
  }
}

export default CountryDetails;
