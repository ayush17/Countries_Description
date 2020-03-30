import React, { Component } from 'react';
import Country from './Country';
import Header from './Header';
import Searchfilter from './Searchfilter';
class Home extends Component {
    state = { countries:[],background:"white",cardsBackground:"#fafafa",textColor:"black",borderStyle:"outset",borderColor:"white",boxShadow:"0px 0px 7px #f0f0eb" ,headerBackground:"white"}
   
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
        return this.state.countries.length===0?<h1>Loading...</h1>:this.state.countries.map(country=>(<Country key={country.capital} countryDetails={country} background={this.state.headerBackground} textColor={this.state.textColor} borderStyle={this.state.borderStyle} borderColor={this.state.borderColor} boxShadow={this.state.boxShadow} />));
      }
      changeMode =(mode)=>{
          if(mode==="Light Mode")
      this.setState({background:"black",textColor:"white",borderStyle:"outset",borderColor:"white",cardsBackground:"#202d36",headerBackground:"#2b3743",boxShadow:"0px 0px 7px 	#1f2c35"})
      else{
          this.setState({background:"white",textColor:"black",borderStyle:"outset",borderColor:"black",cardsBackground:"#fafafa",headerBackground:"white",boxShadow:"0px 0px 7px #f0f0eb"})
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
          <div style={{background:this.state.background,color:this.state.textColor}} >
            <Header changeMode={this.changeMode} background={this.state.headerBackground} />
            <div style={{background:this.state.cardsBackground,padding:"1.7vw"}}>
            <Searchfilter handleSearchCounrty={this.handleSearchCounrty} handleSearchCountryByRegion={this.handleSearchCountryByRegion} background={this.state.headerBackground}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridRowGap:"2vw",gridColumnGap:"2vw" }}>
            {this.countries()}
            </div>
            </div>
        </div>
        )
          
            
    }
}
 
export default Home;