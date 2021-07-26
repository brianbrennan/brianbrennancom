let webpack =  require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './docs');
const APP_DIR = path.resolve(__dirname, './app');

let config = {
    mode: 'development',
    entry: [
        APP_DIR + '/main/Main.tsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.min.js',
        publicPath: '/docs/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.min.css',
        }),
        new OptimizeCssAssetsPlugin(), // if you put it in optimization.minimizer property, webpack-dev-server won't apply it.
        new HtmlWebpackPlugin({
            filename: 'index.html', // relative to output.filename
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test : /\.tsx?$/,
                include : APP_DIR,
                exclude: /node_modules/,
                use : [
                    'ts-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                ]
            },
            // {
            //     test: /\.png$/,
            //     use: 'url-loader?limit=100000'
            // },
            // {
            //     test: /\.jpg$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /\.gif$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: 'url-loader?limit=10000&mimetype=application/font-woff'
            // },
            // {
            //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            // },
            // {
            //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     use: 'file-loader'
            // },
            // {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            // }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        port: 3000,
        // necessary for server to return index.html for any route
        contentBase: path.join(__dirname, 'docs'),
        historyApiFallback: {
            index: path.join(__dirname, 'docs'),
        },
        disableHostCheck: true
    }
};

module.exports = config;