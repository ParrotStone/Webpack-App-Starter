const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
    },
    // Generate a new HTML file from a template and insert the JS script file automatically with the new content hash
    plugins: [new HtmlWebpackPlugin({ template: './src/template.html' })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',  // inject the js(css) into the DOM(between <style> tags)
                    'css-loader',  // transpiles css to js
                    'sass-loader'  // compiles sasss to css
                ]
            },
        ]
    }
});