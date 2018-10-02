const path = require('path');
const sass = require('sass');
const fibers = require('fibers');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')], 
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
        publicPath: '/dist/',
        contentBase: path.resolve(__dirname, ''),
        watchContentBase: true,
    }
};
