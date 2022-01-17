//Se estiver no modo dev, a variável é diferente de production
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //Modo de desenvolvimento ou produção
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        //minificadores
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //.css, .scss, .sass
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag styles
                'css-loader', //interpreta @import, url...
                'sass-loader',
            ]
        }, {
            //regras de arquivos de imagem
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}