const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    stats: 'errors-only',
    devServer: {
        contentBase: ['./src', './docs'],
        open: true,
        liveReload: true,
        inline: true,
        hot: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' }],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack Boilerplate",
            template: './src/html/index.inc',
            description: "Boilerplate for HTML, CSS, and JS Projects built with Lodash, Sass, and ES6",
            color: "#c0c0c0",
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].min.css',
        }),
    ],
};
