//webpack.config.js
const path = require('path');
const glob = require("glob");
const PugPlugin = require('pug-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "src"),
};

module.exports = {
    entry: {
        index: './src/index.pug',
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'js/[name].[contenthash:8].js'
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            css: {
                filename: 'css/[name].[contenthash:8].css'
            }
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader
            },
            {
                test: /\.(css|sass)$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            import: true
                        }
                    }
                    , 'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|ico|webp)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash:8][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                }
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name][ext][query]'
                }
            }
        ]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        watchFiles: {
            paths: ['src/**/*.*', 'src/styles/**/*.*'],
            options: {
                usePolling: true
            }
        }
    },
    watchOptions: {
        poll: 1000, // Check for changes every second
    },
    stats: 'errors-only',
    watch: true
};