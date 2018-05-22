const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        entry: './src/index.ts',
        // app: './src/index.ts',
        //print: './src/index.ts',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        },
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new CopyWebpackPlugin([
            { from: './data/*', to: './' }
        ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          }, {
              test: /\.tsx?$/,
              use: 'ts-loader'
          }, {
              exclude: /node_modules/
          }
     ]
   },
   resolve: {
       extensions: [ '.tsx', '.ts', '.js' ]
   },
   output: {
       filename: '[name].bundle.js',
       path: path.resolve(__dirname, 'dist')
   }
};