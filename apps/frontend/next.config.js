/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['component-library']) // pass the modules you would like to see transpiled

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
})

module.exports = nextConfig
