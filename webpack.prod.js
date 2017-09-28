/**
 * Created by bll on 2017/9/28.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'cheap-module-source-map',
    plugins: [
	  	new UglifyJSPlugin({
		  	sourceMap: true
	  	}),
	  	new webpack.DefinePlugin({
		  	'process.env': {
				'NODE_ENV': JSON.stringify('production')
		  	}
	  	}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Production',
			template: 'index.html'
		})
    ]
});