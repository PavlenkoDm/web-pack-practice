const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'production',
    /*mode: 'development',*/
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project-bundle.js',
    },    
    module: {//--Loaders-------------------------------------------------------------------------
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,/*Извлекатель CSS кода в отдельный файл*/
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }   
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new CleanWebpackPlugin()
    ],
    devServer: {//--Server------------------------------------------------------------------------
        open: true,
        port: 7777,
        stats: 'errors-only'
    }
};