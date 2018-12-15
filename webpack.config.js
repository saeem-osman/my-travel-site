const path = require('path');
const webpack = require('webpack');

module.exports = [{
	entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
	output: {
		path : path.resolve("./app/temp/scripts",'dist'),
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