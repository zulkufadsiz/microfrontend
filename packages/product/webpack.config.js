const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devServer: {
        port: 3001
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js'
    },
    module: {
       rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
       ] 
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         template: './public/index.html'
    //     })
    // ]
}