const path = require('path');

module.exports = {
    entry: './app/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist"
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        port: 3000,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        }
    }
};