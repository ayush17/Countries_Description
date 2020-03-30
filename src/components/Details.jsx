import React, { Component } from 'react';
import Header from './Header'
import CountryDetails from './countryDetails'
class Details extends Component {
    state = { background:"white",textColor:"black",borderStyle:"outset",borderColor:"white" }
    changeMode =(mode)=>{
        if(mode==="Light Mode")
    this.setState({background:"black",textColor:"white",borderStyle:"outset",borderColor:"white",cardsBackground:"#202d36",headerBackground:"#2b3743",boxShadow:"0px 0px 7px 	#1f2c35"})
    else{
        this.setState({background:"white",textColor:"black",borderStyle:"outset",borderColor:"black",cardsBackground:"#fafafa",headerBackground:"white",boxShadow:"0px 0px 7px #f0f0eb"})
    }
    }
    render() { 
        return ( <div style={{background:this.state.background,color:this.state.textColor}} >
            <Header changeMode={this.changeMode} background={this.state.headerBackground} />
            <div style={{background:this.state.cardsBackground,padding:"1.7vw 1.7vw 100vw 1.7vw", height:"100%"}}>
            <CountryDetails capital={this.props.match.params.capital} color={this.state.textColor} background={this.state.headerBackground} />
            
            </div>
        </div>);
    }
}
 
export default Details;