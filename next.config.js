const withTM = require('next-transpile-modules')(['@meetperry/amity-uikit'])

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
