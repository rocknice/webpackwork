const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		"praise": __dirname + "/src/webapp/scripts/thumb.es",
		"box":__dirname + "/src/webapp/scripts/3d-shopping.es"
	},
	output: {
		path: path.join(__dirname, "./build/webapp/"),
		publicPath: "http://111.230.129.19:3000/",                    
		filename: "scripts/[name]-[hash:5].js"
	},
	devServer: {
		contentBase: "/", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	module: {
		rules: [{
			test: /\.es$/,
			use: [{
				loader: "babel-loader",
				options: {
					"presets": [
					["env", {
						'modules': false
					}]
					]
				}
			}]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}
			})
		},{
			test: /\.(png|jpg)$/,
			use: {loader: "url-loader?limit=8192&name=img/[name].[ext]"}
		},{
			test: /\.(woff|svg|eot|ttf)$/,
			use: {loader: "url-loader?name=fonts/[name].[ext]"}
		},{
			test: /\.mp3$/,
			use: {loader: "file-loader?name=audio/[name].[ext]"}
		}]
	},
	plugins: [
		new ExtractTextPlugin("styles/[name]-[hash:5].css"),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/webapp/views/index.html',
			inject: true,
			excludeChunks:['box']
		}),
		new HtmlWebpackPlugin({
			filename: 'layout.html',
			template: './src/webapp/views/layout.html',
			inject: true,
			excludeChunks: ['common','praise','box']
		}),
		new HtmlWebpackPlugin({
			filename: '3dshopping.html',
			template: './src/webapp/views/3dshopping.html',
			inject: true,
			excludeChunks: ['praise']
		}),
		new webpack.optimize.CommonsChunkPlugin({ //提取公共代码
			name: 'common', //公共文件名
			filename: 'scripts/[name]-[hash:5].js', // 地址
			minChunks: 2 //被引用两次以上就生成
		}),
		new webpack.optimize.UglifyJsPlugin({ //压缩代码，同时可以做到将没有用到的代码删除。tree shaking
			compress: {
				warnings: true
			},
			output: {
				comments: false
			},
			sourceMap: false
		}),
		new webpack.optimize.ModuleConcatenationPlugin()
		]
	}