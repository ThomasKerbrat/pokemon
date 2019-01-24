
import React, { Component } from 'react';

export class PokemonListItem extends Component {
	render() {
		return (
			<li>
				{this.props.pokemon.identifier}
			</li>
		);
	}
}

