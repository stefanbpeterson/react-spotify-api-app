import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';



class App extends Component {
  constructor() {
    super()
    this.state = {
      planets: [],
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(planets => {
        this.setState({ planets: planets.results })
      })
  }

  render() {
    return (
      <div>
        <CardList planets={this.state.planets} />
      </div>
    )
  }


}

export default App;
