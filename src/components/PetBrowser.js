import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const adoptedPets = this.prop.adoptedPets;
    const pets = this.prop.pets;
    return (
      <div className="ui cards">
      {pets.map(pet => {
        return(
          <Pet pet={pet} isAdopted={adoptedPets.includes(pet.id)}/>
        )
      })}
      </div>
    );
  }
}

export default PetBrowser;
