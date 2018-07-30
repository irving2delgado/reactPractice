import React, { Component } from 'react';

class IconBox extends Component  {
    constructor(props) {
        super(props);
    }
  
    componentDidMount(){
        return (
            this.playerBio
        )
        
      }
  
    render () {
        
        const playerBio = (props) => {
            return ( 
            <div>{props.results[0].name.first }</div>
            )
          }
        console.log(this.props);
        return(
            <div>
               <ul>
                  
               </ul>
                {this.props.info.data[0].bio}
            </div>
        )
    }
}


export default IconBox;