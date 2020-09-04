import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
  }

      onFindPetsClick = () => {
        let apiReturn;
       if (this.state.filters.type==='dog') {
          apiReturn = '/api/pets?type=dog'
        } else if (this.state.filters.type==='cat') {
          apiReturn = '/api/pets?type=cat'
        } else if (this.state.filters.type==='micropig') {
          apiReturn = '/api/pets?type=micropig'
        } else {
          apiReturn = '/api/pets'
        }
      fetch(apiReturn)
          .then(response => response.json())
        .then(petReturn => this.setState({ pets: petReturn }));
}


  // onChangeType = ({ target: { value } }) => {
//     this.setState({
//  filters: {
// ...this.state.filters, type: value } });
//   };

       onChangeType = ({ target: { filterType } }) => {
         this.setState({
           filters: {
             ...this.state.filters,
             type: filterType } });
       };

       onAdoptPet = (petId) => {
         this.state.pets.find(petId)
       }

  // onAdoptPet = petId => {
  //   const pets = this.state.pets.map(p => {
  //     return p.id === petId ? { ...p, isAdopted: true } : p;
  //   });
  //   this.setState({ pets: pets });
  // };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
