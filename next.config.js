/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.NODE_ENV === 'production'
withPWA({
    pwa: {
        dest: 'public',
        disable: !isProd,
    },
})

const nextConfig = {
    reactStrictMode: true,
    withPWA,
}

module.exports = nextConfig
