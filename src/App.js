import React, { Component } from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
// import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import daisy from './images/daisy.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';

import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  static defaultProps = {
    dogs: [
      {
        name: 'Daisy',
        age: 2,
        src: daisy,
        facts: [
          'Daisy is our newest love.',
          'Daisy is a terrible guard dog.',
          'Daisy wants to cuddle with you!',
          'Daisy just wanted a home and now she has that plus love'
        ]
      },
      {
        name: 'Addie',
        age: 6,
        src: hazel,
        facts: [
          'Addie had soooo much energy!',
          'Addie wanted love and her big sis, Maci.',
          'Addie loved us more than anything but she would have still gone home with a stranger any day',
          'Addie loved eating food slightly more than Maci did'
        ]
      },
      {
        name: 'Maci',
        age: 7,
        src: tubby,
        facts: [
          'Maci was the smartest dog',
          'Maci did not like walks or exercise.',
          'Maci preferred to watch over the situations',
          'Maci loved eating food.'
        ]
      }
    ]
  };
  render() {
    const getDog = (props) => {
      let name = props.match.params.name; // pulled from dom, assigning to name and use to check for matching dog
      let currentDog = this.props.dogs.find(
        (doggy) => doggy.name.toLowerCase() === name.toLowerCase()
      );
      //  returning the DogDetail component along with all the props I passed in, ...props
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;

/*

render() {
  // Here, I want to recieve whatever is entered when the user clicks on a specific dog.
  // all the pups information should carry over and display here
  const getDog = (props) => {
    let name = props.match.params.name; // assigning what the dom list as name to "name"
    // check if this name matches any of the dog names
    let currentDog = this.props.dogs.find(
      (doggy) => doggy.name.toLowerCase() === name.toLowerCase()
    );
    // Now I can return the DogDetail component along with all the props I passed in, ...props
    return <DogDetails {...props} dog={currentDog} />;
    // next, make sure to call, getDog within the route
  };
  return (
    <Switch>
      <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
       <Route exact path="/dogs/:name" render={() => <DogDetails />} /> */
//Route exact path="/dogs/:name" render={ getDog } />
/* By doing, render ={getDog}, react automatically passes in the props */
// </Switch>
