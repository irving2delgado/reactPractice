import React, { Component } from 'react';
import './App.css';
import SocialCard from './socialCard';
import axios from 'axios';
import {
  Switch, Route, BrowserRouter
} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { error: null,
      isLoaded: false,
      results: []
    };

  }


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
      <BrowserRouter>
      <Switch>
        <Route exact path="/players" render={ props => {
          return (
            <SocialCard 
            state={this.state}/>
          );
        } }/>
        
      </Switch>
      </BrowserRouter>
    );
  
  }
}

export default App;
