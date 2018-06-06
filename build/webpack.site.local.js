var path = require('path');
var projectRoot = process.cwd();
console.log("projectRoot",projectRoot);
var webpackConfig = require('./webpack.site.base.js');

var webpack = require('webpack');
var extend = require('util')._extend;

webpackConfig.devtool = 'source-map';

webpackConfig.plugins && webpackConfig.plugins.unshift(
  new webpack.DefinePlugin({
    ENV: JSON.stringify('local')
  })
);

extend(webpackConfig.output, {
  path: path.resolve(projectRoot, './output/'),
  publicPath: '/',
  filename: '[name].js',
  chunkFilename: '[name].js'
});

// let target = 'http://fe2.rongyi.com:8088';
let target = 'http://fe1.rongyi.com:8088';

webpackConfig.devServer = {
	"host":"localhost",
	"port":8000,
	"historyApiFallback":true,
	"stats":"errors-only",
	"proxy":{

	}
};

module.exports = webpackConfig;

