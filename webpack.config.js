const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
	entry: './app/main.js',

	output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
	devtool: 'inline-source-map',
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
	devServer: {
		contentBase: './build',
		hot: true
    },
	plugins: [
		// new ManifestPlugin({
		// 	publicPath: 'bundle_map',
		// 	fileName: 'bundle_map',
		// 	basePath: 'bundle_map'
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common' // 指定公共 bundle 的名称。
		// }),
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		// new UglifyJSPlugin(),
    ]
};