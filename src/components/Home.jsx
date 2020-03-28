import React, { Component } from 'react';
import Country from './Country';
import Header from './Header';
import Searchfilter from './Searchfilter';
class Home extends Component {
    state = { countries:[],background:"white",textColor:"black",borderStyle:"outset",borderColor:"white" }
   
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
        return this.state.countries.length===0?<h1>Loading...</h1>:this.state.countries.map(country=>(<Country key={country.capital} countryDetails={country} background={this.state.background} borderStyle={this.state.borderStyle} borderColor={this.state.borderColor} />));
      }
      changeMode =(mode)=>{
          if(mode==="Light Mode")
      this.setState({background:"black",textColor:"white",borderStyle:"outset",borderColor:"white"})
      else{
          this.setState({background:"white",textColor:"black",borderStyle:"outset",borderColor:"black"})
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
            console.log("this is countryDetails",countryDetails)
            this.setState({countries:[]})
            this.setState({ countries: countryDetails });
          });
      }
    render() { 
        
        return ( <div style={{background:this.state.background,color:this.state.textColor}} >
            <Header changeMode={this.changeMode} />
            <Searchfilter handleSearchCounrty={this.handleSearchCounrty} handleSearchCountryByRegion={this.handleSearchCountryByRegion}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridRowGap:"4vw",padding:"4vw" }}>
            {this.countries()}
            </div>
        </div>
        )
          
            
    }
}
 
export default Home;