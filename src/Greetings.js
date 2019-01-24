import React from 'react';

export default class Greetings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Salut",
		};
	}

	render() {
		return (
			<div>
				{this.state.message} {this.props.name} !
				<button onClick={() => {
					this.setState({ message: 'Bonjour' })
				}}>
					Click me
				</button>
			</div>
		);
	}
}

