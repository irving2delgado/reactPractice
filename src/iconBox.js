import React, { Component } from 'react';

class IconBox extends Component  {
    constructor(props) {
        super(props);
    }
  
    const 
    render () {
        console.log(this.props.info);
        return(
            <div>
                {this.props.info.data[0].bio}
            </div>
        )
    }
}


export default IconBox;