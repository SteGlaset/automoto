//webpack.config.js
const path = require('path');
const PugPlugin = require('pug-plugin');

const PATHS = {
    src: path.join(__dirname, "src"),
};

module.exports = {
    entry: {
        index: './src/index.pug',
        'branches/avtovo': './src/branches/avtovo.pug',
        'branches/devyatkino': './src/branches/devyatkino.pug',
        'branches/komendantskiy': './src/branches/komendantskiy.pug',
        'branches/komendantskiy-aviakonstructorov': './src/branches/komendantskiy-aviakonstructorov.pug',
        'branches/krestovskiy-ostrov': './src/branches/krestovskiy-ostrov.pug',
        'branches/kudrovo': './src/branches/kudrovo.pug',
        'branches/kupchino': './src/branches/kupchino.pug',
        'branches/leninskiy-prospect': './src/branches/leninskiy-prospect.pug',
        'branches/lomonosovskaya': './src/branches/lomonosovskaya.pug',
        'branches/petrogradskaya': './src/branches/petrogradskaya.pug',
        'branches/primorskaya-jeleznovodskaya': './src/branches/primorskaya-jeleznovodskaya.pug',
        'branches/primorskaya-odoevskogo': './src/branches/primorskaya-odoevskogo.pug',
        'branches/prospect-bolshevikov': './src/branches/prospect-bolshevikov.pug',
        'branches/prospect-veteranov': './src/branches/prospect-veteranov.pug',
        'branches/rybackoe': './src/branches/rybackoe.pug',
        'branches/technologicheskiy-institut': './src/branches/technologicheskiy-institut.pug',
    },
    output: {
        path: path.resolve(__dirname, 'dist', ),
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
    mode: 'production',
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