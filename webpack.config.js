const path = require('path');
const webpack = require('webpack');

module.exports = [{
	entry: {
        App: "./docs/assets/scripts/App.js",
        Vendor: "./docs/assets/scripts/Vendor.js"
    },
	output: {
		path : path.resolve("./docs/temp/scripts",'dist'),
		filename: "[name].js"
	},
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader'
                },
                test: /\.js$/,
                exclude: [/node_modules/]
            }
        ]
    },
    
    
},

{
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'windows.jQuery': 'jquery',
    }),
  ],
}]