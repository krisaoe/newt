const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8282',
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  context: resolve(__dirname, 'src'),

  module: {

    rules: [

      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }

      // {
      //   test: //,
      //   use: [],
      // },

    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devtool: "inline-source-map",

  devServer: {
    stats: 'minimal',
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8282/',
    port: 8282,
    compress: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:3838",
        pathRewrite: {"^/api" : ""},
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        }
      }
    }
  }

};
