const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

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
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader?name=images/[name].[ext]'
					},
					{
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              enabled: false
                            },
                            optipng: {
                              enabled: false
                            },
                            gifsicle: {
                              enabled: false,
                            },
                          }
					}
				]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    comments: false
                }
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
			minify: {
                collapseWhitespace: true,
            },
			template: './src/index.html',
			filename: 'index.html'
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
        }),
        new MinifyPlugin()
    ],
    output: {
        pathinfo: false
      }
};