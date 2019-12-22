const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    stats: 'errors-only',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
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
            description: "Boilerplate for HTML, SASS, and ES6 Webpack Projects",
            color: "#c0c0c0",
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].min.css',
        }),
    ],
};
