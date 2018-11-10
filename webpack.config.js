const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 'css-loader', 'sass-loader' ]
				})
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader?name=images/[name].[ext]'
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css',
			publicPath: '../../../'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './index.html',
			filename: 'index.html'
		})
	]
};
