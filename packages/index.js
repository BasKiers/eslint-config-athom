module.exports = {
	extends: [
		'./legacy',
		'./rules/es6',
		// TODO: enable after node 
		// './rules/imports',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
	},
	rules: {
		strict: 2,
	}
};
