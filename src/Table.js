import React, { Component } from 'react'

// TableHeader and tableBody are functional components.
// Make sure components use Pascal case.
const TableHeader = () => (
	// Using arrow functions have an implicit return when using parenthesis.
	// Arrow functions also automatically bind 'this' to the function call.
	<thead>
		<tr>
			<th>Name</th>
			<th>Job</th>
		</tr>
	</thead>
)

// In order for a functional component to receive props, 
// they are passed in as a parameter.
const TableBody = (props) => {
	// When doing an explicit return of JSX, make sure to wrap the content in parenthesis, unless all the code may be contained in one line.

	// Creating a row for every character in the character array.
	let rows = props.characterData.map((person, index) => {
		console.log(person, index)
		return (
		<tr key={index}>
			<td>{person.name}</td>
			<td>{person.job}</td>
		</tr>
		)
	})

	return (
		<tbody>
			{rows}
		</tbody>
	)
}

class Table extends Component {
	render() {
		// To extract the props that were passed to this component, 
		// use this.props.thePropName or ES6 destructuring.
		// ES6:
		const { characterData } = this.props
		// Standard JS:
		// const characters = this.props.characterData


		return(
			<table>
				<TableHeader />
				<TableBody characterData={characterData} />
			</table>
		)
	}
}

export default Table