const webpack = require('webpack')

module.exports = {
    //Modo de desenvolvimento
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    }
}