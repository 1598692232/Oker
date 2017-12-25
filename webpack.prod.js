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

module.exports = merge(common, {
	// devtool: 'cheap-module-source-map',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
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
		new CleanWebpackPlugin(['dist']),
		new webpack.HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20
		}), 
		new HtmlWebpackPlugin({
			title: 'index',
			filename: path.resolve(__dirname, './index/index.html'),
			template: './index.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            chunks: [ 'common', 'vendor', 'app'],//需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
		})
    ]
});