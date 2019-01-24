import React, { Component } from 'react';
import './App.css';

import { recovery } from './recovery.js';
import { SearchablePokemonList } from './components/SearchablePokemonList.js';

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
		<SearchablePokemonList pokemons={this.state.pokemons} />
    );
  }
}

export default App;
