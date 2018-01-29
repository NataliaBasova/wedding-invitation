/**
 * Created by TinyPrincess on 29.03.17.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    },
    entry: ["./src/index.js", "./src/scss/main.scss"],
    output: {
        path: __dirname + '/public/build/',
       // publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract("style-loader!css-loader!sass-loader"),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "resolve-url-loader", "sass-loader?sourceMap"],
                 }),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                }),
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css",
            allChunks: true
     })
    ]
};
