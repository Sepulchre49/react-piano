import React from 'react';
let Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export default class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	notePressed = () => {
		console.log('Note pressed!');
	}
	noteReleased = () => {
		console.log('Note released!');
	}
	
	render() {
		// If its not an Natural key, itll have an index of -1
		let	isAnAccidental = Naturals.indexOf(this.props.note) == -1

		return <button 
			className={"key " + (isAnAccidental ? "black" : "ivory") }
			onMouseDown={this.notePressed}
			onMouseLeave={this.noteReleased}
			onMouseUp={this.noteReleased}
		/>
	}
}