import React, { Component } from 'react';

import { SearchBar } from './SearchBar.js';
import { PokemonList } from './PokemonList.js';

export class SearchablePokemonList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		};

		this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
	}

	handleSearchTextInput(searchText) {
		this.setState({
			search: searchText,
		});
	}

	render() {
		return (
			<div>
				<SearchBar
					searchText={this.state.search}
					onSearchTextInput={this.handleSearchTextInput}
				/>
				<PokemonList pokemons={this.props.pokemons} />
			</div>
		);
	}
}

