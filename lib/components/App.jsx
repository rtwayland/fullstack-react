import React from 'react'

import DataApi from '../DataApi'
import { data } from '../testData.json'
import ArticleList from './ArticleList'

const api = new DataApi(data)

class App extends React.Component {
	state = {
		articles: api.getAriticles(),
		authors: api.getAuthors()
	}

	articleActions = {
		lookupAuthor: (authorId) => this.state.authors[authorId]
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
