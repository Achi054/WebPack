var devconfig = require('./webpack.config');
var webpackstrip = require('strip-loader');
var striper = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: webpackstrip.loader('console.log')
};

devconfig.module.rules.push(striper);
module.exports = devconfig;
