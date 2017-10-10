const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		"index": __dirname + "/src/webapp/scripts/thumb.es"
	},
	output: {
		path: path.join(__dirname, "./build/webapp/"),
		publicPath: "http://111.230.129.19:3000",
		filename: "scripts/[name]-[hash:5].bundle.js"
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
				use: ["css-loader"]
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin("styles/[name]-[hash:5].css"),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/webapp/views/index.html',
			inject: true,
		}),
		new HtmlWebpackPlugin({
			filename: 'layout.html',
			template: './src/webapp/views/layout.html',
			inject: true,
			chunks: ['common']
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