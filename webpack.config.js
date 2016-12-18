var config = {

	entry: './js/script.js',
	output: {
		filename: 'bundle.js',
		library: 'market'
	},
	module: {
	  	loaders: [
		    {
			    test: /\.js$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'babel-loader',
			    query: {
			        presets: ['es2015']
			    }
		    }
	  	]
	}

}

module.exports = config;