const webpack = require('webpack')

module.exports = {
    //Modo de desenvolvimento
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', //Adiciona CSS a DOM injetando a tag styles
                'css-loader' //interpreta @import, url...
            ]
        }]
    }
}