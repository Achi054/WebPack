module.exports = {
	entry: ["./utils", "./app.js"],
	output: {
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			},
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ['.js', '.es6']
	}
}