import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h2 className="display-2 text-center">Dog List</h2>
        <div className="row">
          {this.props.dogs.map((dog) => (
            <div className="Dog col-md-6 col-lg-4 text-center">
              <img src={dog.src} alt={dog.name} />
              <h4>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;

/*
In the return, the idea is to hardcode some of the html and have the dog columns dynamically inserted.
Need to create three columns on one row. Each column to hold a dog
  ->  <div className = "col-4 text-center"></div>
*/
