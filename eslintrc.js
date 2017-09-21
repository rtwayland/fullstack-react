module.exports = {
	extends: ['plugin:flowtype/recommended', 'airbnb', 'prettier', 'prettier/react'],
	plugins: ['flowtype', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		es6: true,
		jest: true,
		browser: true,
		node: true
	},
	globals: {
		DEBUG: false
	}
}
