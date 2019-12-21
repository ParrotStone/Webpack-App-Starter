const path = require('path');

module.exports = {
    entry: {
        main: './src/js/index.js',
        vendor: './src/js/vendor.js'
    },
    module: {
        rules: [
            {
                // Compiles modern JS(ES6+) & JSX into ES5 that all browsers can understand ;)
                test: /\.jsx?$/i,
                exclude: /node_modules/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // Replace the url() & src with require/import so webpack can bundle them correctly(images/resources)
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        // Specify the file loactions in the root dir
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets'
                        }
                    },
                    {
                        // Compress large images
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            },
        ]
    }
};