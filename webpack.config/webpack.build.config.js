const merge = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common.config')

const buildWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})