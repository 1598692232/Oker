/**
 * Created by bll on 2017/9/28.
 */
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'cheap-module-eval-source-map',
	devServer: {
	  	contentBase: './dist',
		hot: true,
		stats: "errors-only"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
});