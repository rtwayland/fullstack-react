import React from 'react'

class App extends React.Component {
	state = {
		answer: 42
	}
	render() {
		return (
			<h2>Hello there -- {this.state.answer}</h2>
		)
	}
}

export default App
