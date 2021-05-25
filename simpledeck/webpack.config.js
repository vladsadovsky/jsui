const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map", 
    mode: "development", 
    entry: "./src/appsinglelayer.js",
    output: {
        filename: "bundle.js",
        devtoolModuleFilenameTemplate: "[resource-path]", 
        path: __dirname + '/dist/',
        library: "simpledeck",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [    
        new HtmlWebpackPlugin({
            template: './static/index.html',
            favicon: "./static/favicon.ico"
        })
    ]
}