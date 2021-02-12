const path = require('path')
const {entries, paths, MODES, isProduction} = require('../constants')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    mode: isProduction ? MODES.PROD : MODES.DEV,

    entry: {
        main: entries,
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', ".css", ".scss"],
        modules: ['src', 'node_modules'],
        alias: {
            '@app': paths.src,
            '@modules': path.resolve(paths.src, 'modules'),
            '@ui-kit': path.resolve(paths.src, 'components'),
            '@utils': path.resolve(paths.src, 'utils'),
            '@hooks': path.resolve(paths.src, 'hooks'),
        },
    },

    optimization: {
        minimize: isProduction,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    output: {
        path: paths.dist,
        filename: '[name].[hash].js'
    },

    devServer: {
        historyApiFallback: true,
        contentBase: paths.dist,
        // open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.assets, 'index.html'),
            filename: 'index.html',
            title: 'Trouble ticket',
        }),

        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /\.test.(ts|tsx)$/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(gif|png|jpg|eot|ttf|svg|woff|woff2|pdf)$/,
                include: [paths.src, path.resolve(paths.root, 'node_modules')],
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'assets/[name].[hash:8].[ext]',
                        publicPath: '/'
                    }
                }]
            },
        ],
    }
}
