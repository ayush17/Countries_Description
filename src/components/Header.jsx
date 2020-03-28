
import React, { Component } from 'react';
import { WiSunrise } from "react-icons/wi";
class Header extends Component {
    state = { mode:"Light Mode" }
    changeMode=(mode)=>{
        if(this.state.mode==="Light Mode"){
            this.setState({mode:"Dark Mode"})
            this.props.changeMode(this.state.mode)
        }
        else{
            this.setState({mode:"Light Mode"})
            this.props.changeMode(this.state.mode)
        }

        
    }
    render() { 
        return ( <header style={{padding:"4vw",display:"flex",justifyContent:"space-between",boxShadow: "5px"}}>
            <span style={{fontWeight:"bold",fontSize:"2vw"}}>Where in the world?</span>
            <span style={{cursor:"pointer"}} onClick={()=>{this.changeMode(this.state.mode)}}> <WiSunrise/>&nbsp;{this.state.mode} </span>
        </header> );
    }
}
 
export default Header;