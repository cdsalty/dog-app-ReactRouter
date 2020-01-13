import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // so we can use the go-back tab
import './DogDetails.css';

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="DogDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="DogDetails-card card">
            <img className="card-img-top" src={dog.src} alt={dog.name} />
            <div className="card-body">
              <h3 className="card-title">{dog.name}</h3>
              <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, index) => (
                <li className="list-group-item" key={index}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              {/* Go Back... */}
              <Link to="/dogs" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
        </div>
        {/* <h2>{this.props.dog.name}</h2> */}
        {/* <h2>{dog.name}</h2> */}
      </div>
    );
  }
}

export default DogDetails;

// by defining let {dog} = this.props;, I am able to later just write dog.(whatever)
