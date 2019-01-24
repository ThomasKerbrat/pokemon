import React, { Component } from 'react';
import Greetings from './Greetings.js';
import './App.css';
import { recovery } from './recovery.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    recovery()
      .then(results => this.setState({ pokemons: results.pokemon }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <ul>
        {this.state.pokemons.map(pokemon => (
          <li>{pokemon.identifier}</li>
        ))}
      </ul>
    );
  }
}

export default App;
