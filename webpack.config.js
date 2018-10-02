const path = require('path');
const sass = require('sass');
const fibers = require('fibers');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    resolve: {
        modules: ['node_modules', __dirname], 
        alias: {
            Components: path.resolve(__dirname, 'src/Components')
        },
        extensions: ['.js', '.jsx', '.scss', '.css', '*']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      importLoaders: 1,
                      localIdentName: '[name]_[local]_[hash:base64]',
                      sourceMap: true
                    }
                  },
                   {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                      implementation: sass,
                      fiber: fibers,
                    },
                  }
                ]
              }
        ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
    }
};
