/**
 * Created by bll on 2017/9/28.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const wu = require('./webpack_utils');

module.exports = merge(common, {
	// devtool: 'cheap-module-source-map',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, './static'),
		publicPath: './',  
	},
    plugins: [
	  	new UglifyJSPlugin({
		  	sourceMap: true
	  	}),
	  	new webpack.DefinePlugin({
		  	'process.env': {
				'NODE_ENV': JSON.stringify('production')
		  	}
	  	}),
		new CleanWebpackPlugin(['dist', 'public', 'static']),
		new webpack.HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20
		}), 
		new HtmlWebpackPlugin(wu.getHtmlForWebpack('index', true, 'public/')),
		new HtmlWebpackPlugin(wu.getHtmlForWebpack('home', true, 'public/')),
    ]
});