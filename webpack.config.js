const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'src')

const BUILD_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    mode: BUILD_ENV,
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve(APP_DIR)
        ],
        alias: {
            // '@go-prime/ui': PACKAGES_DIR + '/ui'
        }
    },
    plugins: [new HtmlWebpackPlugin({
        hash: true,
        template:`${APP_DIR}/index.html`,
        filename: `${BUILD_DIR}/index.html`
    })]
}
