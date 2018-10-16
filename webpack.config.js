    const path = require('path');
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const Dotenv = require('dotenv-webpack');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }, {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
          }
        ]
        },
        devServer: {
          historyApiFallback: true,
          port: 9000
        },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        }),
        new Dotenv({
          path: './.env',
          safe: true
        })
      ]
    };