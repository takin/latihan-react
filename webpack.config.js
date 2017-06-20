const webpack = require('webpack');
const path = require('path');

const WHP = require('webpack-html-plugin');
const WHPConfig = new WHP({
    template:'./index.html',
    filename:'index.html',
    inject: 'body'
});


module.exports = {
    entry:path.resolve('index.js'),
    output:{
        path:path.resolve('dist'),
        filename:'app.bundle.js'
    },
    module:{
        loaders:[
            { test:/\.jsx?$/, loader:'babel-loader', query:{ presets:['react', 'es2015'] }, exclude:/node_modules/ }
        ]
    },
    plugins:[
        WHPConfig
    ]
}