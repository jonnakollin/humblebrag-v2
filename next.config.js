const withLess = require('@zeit/next-less')
module.exports = withLess({
    cssModules: true,
    lessLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
    }
})

