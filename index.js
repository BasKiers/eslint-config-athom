module.exports = {
	extends: [
		'./.eslint/legacy',
		'./.eslint/rules/es6',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'script',
	},
	globals: {
		'Homey': false,
		'__': false,
	},
	rules: {
		// require use strict (to enable use of const and let in node 4)
		strict: [2, 'global'],
		// set max line length to 120 and make it a warning instead of an error
		'max-len': [1, 120, 2, {
			ignoreUrls: true,
			ignoreComments: false
		}],
		// set indents to tabs
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		// allow returning a variable assignment
		'no-return-assign': 0,
		// make comma dangle a warning
		'comma-dangle': [1, 'always-multiline'],
		// make functions and classes accessable before declaration
		'no-use-before-define': [2, { 'functions': false, 'classes': false }],
		// make no-unused-vars throw a warning instead of error
		'no-unused-vars': [1, { vars: 'local', args: 'after-used' }],
		// allow inconistent return
		'consistent-return': 0,
		// allow underscore dangle
		'no-underscore-dangle': 0,
		// allow param reassign
		'no-param-reassign': 0,
		// allow shadowing of err, callback and body/response (to allow nesting requests)
		'no-shadow': [2, { allow: ['err', 'error', 'cb', 'callback', 'body', 'response'] }],
		// make nessecary space before comment a warning
		'spaced-comment': [1, 'always', {
			exceptions: ['-', '+'],
			markers: ['=', '!']           // space here to support sprockets directives
		}],
	},
};
