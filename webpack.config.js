const webpack = require("webpack")
const path = require("path")
const Html = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
    mode: mode,
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        publicPath: "/",
        path: path.join(__dirname, "/statics")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV),
        }),
        new Html({
            inject: true,
            template: "src/assets/index.html",
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "/src/assets"),
        open: true,
        port: 3000,
    }
};
