import React, { Component } from 'react';
import Header from './Header'
import CountryDetails from './countryDetails'
import {ThemeContext,themes} from './themeContext'
class Details extends Component {
    state = { theme:themes }
    changeMode =(mode)=>{
        if(mode==="Light Mode"){

          this.setState({theme:themes.dark})
        }
    else{
        this.setState({theme:themes.light})
    }
    }
    render() { 
        return ( <ThemeContext.Provider value={this.state.theme}>
             <div style={{background:this.state.theme.background,color:this.state.theme.textColor}} >
            <Header changeMode={this.changeMode}  />
            <div style={{background:this.state.cardsBackground,padding:"1.7vw 1.7vw 100vw 1.7vw", height:"100%"}}>
            <CountryDetails capital={this.props.match.params.capital} color={this.state.theme.textColor} background={this.state.theme.headerBackground} />
            
            </div>
        </div>
        </ThemeContext.Provider>
       );
    }
}
 
export default Details;