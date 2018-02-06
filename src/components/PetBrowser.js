import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  const pets = this.prop.pets;
  render() {
    return (
      <div className="ui cards">

      </div>
    );
  }
}

export default PetBrowser;
