const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle-[contentHash].js',
        path: path.resolve(__dirname, 'dist/'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            cache: true,
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                keepClosingSlash: true,
                removeEmptyAttributes: true,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'all.bundle-[contentHash].css' })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,  // inject the js(css) into the DOM(between <style> tags)
                    'css-loader',  // transpiles css to js
                    'sass-loader'  // compiles sasss to css
                ]
            },
        ]
    }
});