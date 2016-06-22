'use strict';

module.exports = {
	entry: ".app/App.js",
	output: {
		filename: "Public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presents: ['react']
				}
			}
		]
	}	
}
