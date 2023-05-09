const path = require('path');

module.exports = {
	mode: 'production',
	entry: './ts-webpack/index.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'ts-webpack/dist'),
		publicPath: '/ts-webpack/dist'
	}
};
