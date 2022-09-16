/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
})

module.exports = withPWA()
