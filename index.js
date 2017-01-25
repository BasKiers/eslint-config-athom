module.exports = {
	extends: [
		'./packages/legacy',
		'./packages/rules/es6',
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
		// rest params are not available yet
		'prefer-rest-params': 0,
		// allow (not so) confusing arrow
		'no-confusing-arrow': 0,
		// Do not enforce padding within blocks
		'padded-blocks': 0,
		// Do not enforce disallowwing console
		'no-console': 0,
		// No case declerations disable because of Webstorm formatting bug
		'no-case-declerations': 0,
		// Allow for-in statement
		'no-restricted-syntax': [
			2,
			'DebuggerStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'new-cap': [2, {
			newIsCap: true,
			// Do not display a notice when using CommandClass methods
			{ "newIsCapExceptionPattern": "^node.CommandClass\.." },
		}],
	},
};
