/**
 * Created by bll on 2017/9/28.
 */
const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const wu = require('./webpack_utils');

module.exports = merge(common, {
	output: {
		filename: '[name].bundle.js',
	  	path: path.resolve(__dirname, 'dist'),
	  	publicPath: '/',  
  	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './',
		host: 'localhost',
		port: 9090, //默认8080
		inline: true, //可以监控js变化
		hot: true, //热启动
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:9090' }),
		new HtmlWebpackPlugin(wu.getHtmlForWebpack('index', false)),
		new HtmlWebpackPlugin(wu.getHtmlForWebpack('home', false)),
	],

	module: {
		loaders: [{
			test: /\.(js|es6|jsx)$/,
			exclude: /node_modules/,
			loaders: ['babel-loader',
				'eslint-loader'
			]
		}]
	},

});


