// Every component must have this import statement.
// Curly brackets specify specific portions of code.
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
	render() {
		// Always place the code blocks between the render and return methods.
		let heading = <h1 className="site-heading">Baron's app.</h1>
		
		const characterData = [
			{
				name: 'Charlie',
				job: 'Janitor',
			},
			{
				name: 'Mac',
				job: 'Bouncer',
			},
			{
				name: 'Dee',
				job: 'Aspring actress',
			},
			{
				name: 'Dennis',
				job: 'Bartender',
			},
		]

		return (
			<div className="App">
				{/* Use {} to interpolate JavaScript within JSX */}
				{ heading }
				
				{/* Imported components use < /> tags to call them. */}
				{/* Pass props just like you would HTML attributes. */}
				<Table characterData={characterData} />

			</div>
		)
	}
}

export default App