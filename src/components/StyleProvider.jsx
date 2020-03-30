import React, { Component } from 'react';
import {themes} from './themeContext'
const MyStyleContext =React.createContext();
class StyleProvider extends Component {
    state = { theme:themes.light }
    render() { 
        return ( <MyStyleContext.Provider theme={this.state.theme}>
            {this.props.children}
        </MyStyleContext.Provider> );
    }
}
 
export  {MyStyleContext ,StyleProvider};