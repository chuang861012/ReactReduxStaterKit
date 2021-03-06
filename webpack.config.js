const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: ['./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                exclude: /node_modules/,
                use: "babel-loader",
                test: /\.js|jsx$/
            },
            {
                loader: ExtractTextPlugin.extract({
                    use: "css-loader"
                }),
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin("style.css")
    ]
}

module.exports = config;