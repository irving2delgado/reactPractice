import React, { Component } from 'react';
import './App.css';
import SocialCard from './socialCard';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { error: null,
      isLoaded: false,
      results: []
    };

  }

    /* createPlayer() {
      
        fetch("https://randomuser.me/api/?gender=male&nat=uss")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
               results: result.results
              });
    
              // console.log(this.state.results);
              // console.log(this.props.player);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          .then(
            console.log(this.state.results)
          )
          return 
        (<div>{this.state.results[0].name.first}</div>);
      }; */
    

  componentDidMount(){
    this.getPerson();
  }

 

  getPerson(){
    axios.get("https://randomuser.me/api/?gender=male&nat=uss&results=10")
    .then(response => {
      this.setState({results: response.data.results}, (state) => {
        console.log(this.state)
      })
    })
  };

  render() {

  
    return (
      <div className="App">
        
        <SocialCard state={this.state}/>
      </div>
    );
  
  }
}

export default App;
