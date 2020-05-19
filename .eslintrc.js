module.exports = {
	env: {
		browser: true,
		es6: true
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.d.ts', '.ts', '.tsx']
			}
		}
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab']
	}
};