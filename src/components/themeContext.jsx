import React, { Component } from 'react';
export const themes = {
    light: {
        background:"white",
        cardsBackground:"#fafafa",
        textColor:"black",
        borderStyle:"outset",
        borderColor:"white",
        boxShadow:"0px 0px 7px #f0f0eb" ,
        headerBackground:"white"
    },
    dark: {
        background:"black",
        textColor:"white",
        borderStyle:"outset",
        borderColor:"white",
        cardsBackground:"#202d36",
        headerBackground:"#2b3743",
        boxShadow:"0px 0px 7px 	#1f2c35"
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.light // default value
  );