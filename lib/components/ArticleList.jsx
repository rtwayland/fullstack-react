import React from 'react'
import PropTypes from 'prop-types'

import Article from './Article'

const ArticleList = props =>
	<div>
		{Object.values(props.articles).map(article =>
			<Article key={article.id} article={article} author={props.authors[article.authorId]} />
		)}
	</div>

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	authors: PropTypes.object.isRequired
}

export default ArticleList
