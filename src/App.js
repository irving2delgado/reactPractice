import React, { Component } from 'react';
import './App.css';
import SocialCard from './socialCard';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { error: null,
      isLoaded: false,
      results: {}
    };
  }


  componentDidMount() {
    fetch("https://randomuser.me/api/?gender=male&nat=uss")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
           results: result.results
          });
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
  }


  render() {
   console.log(this.state.results);
    function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const shootingIn = getRandomInt(20,70);
	  const shootingOut = getRandomInt(60,100);
	  const handling = getRandomInt(60,100);
	  const passing = getRandomInt(60,100);
	  const steal = getRandomInt(30,100);
	  const block = getRandomInt(20,70);
	  const speed = getRandomInt(60,100);
	  const strength = getRandomInt(35,85);
	  const vert = getRandomInt(100,60);

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="App">
        my app
        <button onClick={() => {}}>This is a button</button>

        <div className="new-player">
        
        </div>
        <SocialCard />
      </div>
    );
  }
  }
}

export default App;
