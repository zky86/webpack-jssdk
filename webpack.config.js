const merge = require('webpack-merge');
const baseConfig = require('./config/webpack.base');
const developmentConfig = require('./config/webpack.development');
const productionConfig = require('./config/webpack.production');

module.exports = mode => {
  if (mode === "production") {
    return merge(baseConfig, productionConfig, {
      mode
    });
  }
  return merge(baseConfig, developmentConfig, {
    mode
  });
}