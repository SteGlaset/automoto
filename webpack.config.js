//webpack.config.js
const path = require('path');
const PugPlugin = require('pug-plugin');

const PATHS = {
    src: path.join(__dirname, "src"),
};

module.exports = {
    entry: {
        index: './src/index.pug',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            css: {
                filename: 'css/[name].css'
            }
        })
    ],
    mode: 'development',
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
                    filename: 'assets/images/[name].[ext]'
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
        }
    },
    stats: 'errors-only'
};