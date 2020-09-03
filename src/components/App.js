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


  apiReturn = (filterType) => {
    var apiReturn;
   if (this.state.filter.type==='all') {
      apiReturn = '/api/pets'
    } else if (this.state.filter.type==='dog') {
      apiReturn = '/api/pets?type=cat'
    } else if (this.state.filter.type==='cat') {
      apiReturn = '/api/pets?type=cat'
    } else {
      apiReturn = '/api/pets?type=micropig'
    }
  }

    onFindPetsClick = () => {
      debugger;
      fetch(apiReturn)
        .then(function(response) {
          return response.json();
      })
      .then(function(json) {
        console.log(json)
    });

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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
