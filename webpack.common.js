/**
 * Created by bll on 2017/9/28.
 */
const path = require('path');
const webpack = require('webpack')
// const ManifestPlugin = require('webpack-manifest-plugin')
console.log(12321312312)
module.exports = {
	entry: {
		app: './app/main.js', 
		home: "./app/home.js",
		vendor: [
		    'react',
			'react-dom'
		]
	},

	module: {
		loaders: [{
			test: /\.(js|es6|jsx)?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:{
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
		path: path.resolve(__dirname, 'static')
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		})
	],

	resolve: {
		alias: {
			assets: path.resolve(__dirname, './assets'),
			css: path.resolve(__dirname, './assets/css'),
			img: path.resolve(__dirname, './assets/img'),
			app: path.resolve(__dirname, './app'),
			actions: path.resolve(__dirname, './store/actions'),
			reducer: path.resolve(__dirname, './store/reducer'),
			state: path.resolve(__dirname, './store/state'),
		}
	}
};