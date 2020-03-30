import React, { Component } from 'react';
import Country from './Country';
import Header from './Header';
import Searchfilter from './Searchfilter';
import {ThemeContext,themes} from './themeContext'
import { StyleProvider,MyStyleContext} from './StyleProvider'
class Home extends Component {
    state = { countries:[],theme:themes.light}
   
    componentDidMount=()=> {

       
        fetch(
          `https://restcountries.eu/rest/v2/all`
        )
          .then(response => response.json())
          .then(countryDetails => {
            this.setState({ countries: countryDetails });
          });
       
      }
      countries =()=>{
        return this.state.countries.length===0?<h1>Loading...</h1>:this.state.countries.map(country=>(<Country key={country.capital} countryDetails={country} />));
      }
      changeMode =(mode)=>{
          if(mode==="Light Mode"){

            this.setState({theme:themes.dark})
          }
      else{
          this.setState({theme:themes.light})
      }
      }
      handleSearchCounrty=(countryName)=>{
        fetch(
          `https://restcountries.eu/rest/v2/name/${countryName}`
        )
          .then(response => response.json())
          .then(countryDetails => {
            this.setState({countries:[]})
            this.setState({ countries: countryDetails });
          });
      }
      handleSearchCountryByRegion=(region)=>{
        
        fetch(
          `https://restcountries.eu/rest/v2/region/${region.item.props.children}`
        )
          .then(response => response.json())
          .then(countryDetails => {
            this.setState({countries:[]})
            this.setState({ countries: countryDetails });
          });
      }
    render() { 
        return ( 
          <ThemeContext.Provider value={this.state.theme}>
                <div style={{background:this.state.theme.background,color:this.state.theme.textColor}} >
                <Header changeMode={this.changeMode}/>
                <div style={{background:this.state.theme.cardsBackground,padding:"1.7vw"}}>
                <Searchfilter handleSearchCounrty={this.handleSearchCounrty} handleSearchCountryByRegion={this.handleSearchCountryByRegion} background={this.state.headerBackground}/>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridRowGap:"2vw",gridColumnGap:"2vw" }}>
                {this.countries()}
                </div>
                </div>
            </div>
      </ThemeContext.Provider>
        
        )
            
    }
}
export default Home;