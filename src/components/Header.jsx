
import React, { Component } from 'react';
import { WiSunrise } from "react-icons/wi";
class Header extends Component {
    state = {  }
    render() { 
        return ( <header style={{padding:"2vw",background:"white",display:"flex",justifyContent:"space-between",boxShadow: "0px 4px #fafafa"}}>
            <span style={{fontWeight:"bold",fontSize:"2vw"}}>Where in the world?</span>
            <span> <WiSunrise/>&nbsp;Light Mode </span>
        </header> );
    }
}
 
export default Header;