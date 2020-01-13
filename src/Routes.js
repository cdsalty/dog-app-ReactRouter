import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class Routes extends Component {
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
      <Switch>
        <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;

// Pull everything inside switch
// move over imports into Routes.js: DogList, Route, Switch
// Added Redirect
// carried over getDog()
// import Routes into App.js
// add Routes component after Navbar
// set the Navbar equal this.props.dogs
