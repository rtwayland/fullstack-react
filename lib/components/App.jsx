import React from 'react'
import axios from 'axios'

import DataApi from '../DataApi'
import ArticleList from './ArticleList'

class App extends React.Component {
	state = {
		articles: {},
		authors: {}
	}

	async componentDidMount() {
		const res = await axios.get('/data')
		const api = new DataApi(res.data)

		this.setState({
			articles: api.getAriticles(),
			authors: api.getAuthors()
		})
	}

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId]
	}

	render() {
		return (
			<div>
				<h2>Hello there</h2>
				<ArticleList articles={this.state.articles} articleActions={this.articleActions} />
			</div>
		)
	}
}

export default App
