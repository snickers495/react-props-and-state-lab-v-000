import React from 'react';
import PropTypes from 'prop-types';

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    const pet = this.props.pet
    const isAdopted = this.props.isAdopted;
    const gender = pet.gender === 'male' ? '♂' : '♀';
    const onAdoptPet = this.props.onAdoptPet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} {gender}</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted ? <button onClick={onAdoptPet(pet.id)} className="ui disabled button">Already adopted</button>
          : <button className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
