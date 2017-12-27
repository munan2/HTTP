const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, './dist'),//相对路径转成绝对路径
		filename: '[name].bundle.js',
		publicPath: '/dist/'//浏览器引用静态资源的路径，热更新指定编译的包访问位置
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'less-loader'
			},
			{
				test: /\.(png|jpg|gif|svg|jpeg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
}