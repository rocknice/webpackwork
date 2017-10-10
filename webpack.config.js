const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		path: __dirname + "/src/webapp/scripts/thumb.es"
	},
	output: {
		path: path.join(__dirname, "./build/webapp/"),
		publicPath: "http://localhost:3000/",
		filename: "scripts/[name].bundle.js"
	},
	devServer: {
		contentBase: "./public", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	module: {
		rules: [{
			test: /\.es$/,
			use: [{
				loader: "babel-loader",
				options: {
					"presets": [ "env"]
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
		new ExtractTextPlugin("styles/[name].css"),
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
			filename: 'scripts/[name].js', // 地址
			minChunks: 2 //被引用两次以上就生成
		}),
		// new webpack.optimize.ModuleConcatenationPlugin()
	]
}