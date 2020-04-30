// Every component must have this import statement.
// Curly brackets specify specific portions of code.
import React, { Component } from 'react'
import Table from './Table'
import Form from "./Form";

class App extends Component {
	// 'state' is property of the App component, not a variable declaration.
	state = {
		characterData: []
	}

	removeCharacter = (index) => {
		const {characterData} = this.state;

		this.setState({
			characterData: characterData.filter((character, i) => {
				return i !== index;
			})
		})
	}

	handleSubmit = character => {
		this.setState({
			characterData: [...this.state.characterData, character ]
		})
	}

	render() {
		// Always place variable declarations between the render and return methods.
		let heading = <h1 className="site-heading">People and Jobs :)</h1>
		
		return (
			<div className="App">
				{/* Use {} to interpolate JavaScript within JSX */}
				{ heading }
				
				{/* Imported components use < /> tags to call them. */}
				{/* Pass props just like you would HTML attributes. */}
				<Table characterData={this.state.characterData} 
					removeCharacter={this.removeCharacter}
				/>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App