import React, { Component } from 'react';
import IconBox from "./iconBox"


class SocialCard extends Component {

    render () {
        
          console.log(this.props);
        return(
            <div>
                <ul style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", listStyleType:"none"}}>
                {this.props.state.results.map((result, i) => 
                       <li key={i} >
                       
                        {result.name.first} {result.name.last}
                        <IconBox props={this.props}/>
                       </li>
                       
                   )}
                </ul>
                
            </div>
        )
    }
}


export default SocialCard;