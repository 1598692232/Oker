/**
 * Created by bll on 2017/9/28.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// devtool: 'cheap-module-source-map',
	output: {
		filename: 'upload.v1.02.min.js',
		path: path.resolve(__dirname, 'dist')
	},
	target: 'node',
    plugins: [
	  	// new UglifyJSPlugin(),
	  	new webpack.DefinePlugin({
		  	'process.env': {
				'NODE_ENV': JSON.stringify('production')
		  	}
	  	}),
		new CleanWebpackPlugin(['dist']),
		// new webpack.HashedModuleIdsPlugin({
		// 	hashFunction: 'sha256',
		// 	hashDigest: 'hex',
		// 	hashDigestLength: 20
		// })
    ]
});