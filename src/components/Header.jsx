
import React, { Component } from 'react';
import { WiSunrise } from "react-icons/wi";
import {ThemeContext,themes} from './themeContext'
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
        return (
            <React.Fragment>
            <ThemeContext.Consumer>
              
            {theme=>(<div style={{padding:"2vw 0vw 1vw 0vw",display:"flex",justifyContent:"space-between",  boxShadow:"0px 0px 9px #f0f0eb" ,padding:"1.7vw",background:theme.headerBackground} }>
            <span style={{fontWeight:"bold",fontSize:"1.5vw"}}>Where in the world?</span>
            <span style={{cursor:"pointer"}} onClick={()=>{this.changeMode(this.state.mode)}}> <WiSunrise/>&nbsp;{this.state.mode} </span>
            </div>)

            }
            </ThemeContext.Consumer>
            </React.Fragment>
         );
    }
}
 
export default Header;