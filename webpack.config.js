const path = require('path');

const config = {
	context: __dirname,
	entry: [
		'babel-polyfill',
		'./lib/renderers/dom.jsx'
	],
	devtool: process.env.NODE_ENV === 'development'
		? 'cheap-eval-source-map'
		: false,
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: false
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};

module.exports = config;
