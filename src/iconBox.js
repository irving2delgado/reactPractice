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
      
       
        
        return(
            <div>
               <ul>
                  { shootingIn } { shootingOut }
               </ul>
                
            </div>
        )
    }
}


export default IconBox;