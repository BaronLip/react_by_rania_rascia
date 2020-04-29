// Every component must have this import statement.
// Curly brackets specify specific portions of code.

import React, { Component } from 'react'

class App extends Component {
	render() {
		// Always place the code blocks between the render and return methods.
		let heading = <h1 className="site-heading">Baron's app.</h1>
		
		return (
			<div className="App">
				{/* Use {} to interpolate JavaScript within JSX */}
				{heading}
			</div>
		)
	}
}

export default App