var webpack = require("webpack"); // we need webpack for webpack.optimize. ...

module.exports = {
   entry: {
       worklog: './src/worklog.js', // the entry javascript file
       vendor: ['react', 'react-dom', 'jquery'] // vendor bundle consisting of various modules
   },
   output: {
       path: __dirname + '/dist', // the result folder
       filename: '[name].bundle.js' // the result file (wall.bundle.js & vendor.bundle.js)
   },
   module: {
       loaders: [
           { 
               test: /\.(js|jsx)$/,   // all files ending with .js
               loader: 'babel-loader',   // should be loaded with the babel loader
               exclude: /node_modules/,   // except those in /node_modules/
               query: {
                   presets: ['es2015', 'react']   // these presets should be used on them
               }           }       ]   },
   plugins: [
       new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
   ]
}
