const webpack = require('webpack');

module.exports = {
	entry: __dirname + "app/main.js",//入口文件
	output: {//产出目录
		path: __dirname + "/build"
		filename: '[name].js'
	},
	devtool: 'none',//开发工具，开发环境生产环境等选择
	devServer: {//开发中Server，能够用多种方式改变其行为
		contentBase: path.join(__dirname, 'public'),//路径来自dist/目录下的文件
		compress: true,//压缩
		port: 9000,//端口号
		clientLogLevel: "none",//在控制台显示信息，none,error,warning,info(默认值)

	}
}
