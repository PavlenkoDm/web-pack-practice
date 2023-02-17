const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'production',
    /*mode: 'development',*/
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project-bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {//--Loaders---
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }   
        ]
    },
    devServer: {//--Server---
        open: true,
        port: 7777,
        stats: 'errors-only'
    }
};