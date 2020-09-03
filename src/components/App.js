import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

    onChangeType = (filterType) => {
      this.setState({
        filters: {
          ...this.state.filters,
          type: filterType
        }
      })
    }



    onFindPetsClick = () => {
      let apiReturn;
     if (this.state.filters.type==='all') {
        apiReturn = '/api/pets'
      } else if (this.state.filters.type==='dog') {
        apiReturn = '/api/pets?type=cat'
      } else if (this.state.filters.type==='cat') {
        apiReturn = '/api/pets?type=cat'
      } else {
        apiReturn = '/api/pets?type=micropig'
      }
    fetch(apiReturn)
        .then(response => response.json())
      .then(petReturn => this.setState({ pets: petReturn }));
    }




  //})

    onAdoptPet = (petId) => {
      this.state.pets.find(petId)
    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
