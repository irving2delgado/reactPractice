import React, { Component } from 'react';

class IconBox extends Component  {
    constructor(props) {
        super(props);
    }
  
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  };



    render () {
     function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
      };
       
        const shootingIn = getRandomInt(20,70);
        const shootingOut = getRandomInt(60,100);
        const handling = getRandomInt(60,100);
        const passing = getRandomInt(60,100);
        const steal = getRandomInt(30,100);
        const block = getRandomInt(20,70);
        const speed = getRandomInt(60,100);
        const strength = getRandomInt(35,85);
        const vert = getRandomInt(100,60);

        const divStyle = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            margin: '10px',
            
          };
      
       
        
        return(
            <div style={divStyle}>
               <ul style={{listStyleType:"none", fontSize:"15px", lineHeight:"25px", padding:"15px"}}>
                <h4>Skill</h4>
                <li>Inside: {shootingIn}</li>
                <li>Shooting: {shootingOut}</li>
                <li>Handling: {handling}</li>
                <li>Passing: {passing}</li>
                </ul>
                <ul style={{listStyleType:"none", fontSize:"15px", lineHeight:"25px", padding:"15px"}}>
                <h4>Physical</h4>
                <li>Steal: {shootingIn}</li>
                <li>Block: {shootingOut}</li>
                <li>Speed: {handling}</li>
                <li>Vert: {passing}</li>
                </ul>
                
            </div>
        )
    }
}


export default IconBox;