/**
 * Created by bll on 2017/9/28.
 */
const path = require('path');

module.exports = {
	entry: {
		app: './app/main.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:
				{
					presets: ['es2015','react']
				}
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
			]
		}]
	},
	output: {
	  	filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};