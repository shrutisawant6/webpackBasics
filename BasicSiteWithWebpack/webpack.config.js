const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
  entry: './src/index.js',  // Entry point
  output: {
    filename: 'bundle.js',  // Output file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true,  // Cleans the output directory before every build
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Template to generate the HTML file
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Tell Webpack Dev Server to serve files from 'dist'
    },
    compress: true,
    port: 8080,
    open: true,  // Automatically open the browser when the server starts
  },
};
