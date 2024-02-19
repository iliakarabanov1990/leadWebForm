const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const {resolve} = require('node:path');

module.exports = {
    entry: {
        main: resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html'),
            inject: 'head',
            scriptLoading: 'defer',
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/confirmation.html'),
            filename: 'confirmation.html',
            chunks: ['confirmation'],
        }),
        new MiniCssExtractPlugin({
            filename: './style.[contenthash].css'
        }),
    ],
};