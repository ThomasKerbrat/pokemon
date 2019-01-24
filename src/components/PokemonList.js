
import React, { Component } from 'react';
import { PokemonListItem } from './PokemonListItem.js';

export class PokemonList extends Component {
	render() {
		return (
			<ul>
				{this.props.pokemons.map(pokemon => (
					<PokemonListItem pokemon={pokemon} key={pokemon.identifier} />
				))}
			</ul>
		);
	}
}

