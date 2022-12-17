/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents: true,
  },
  images:{
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3333',
        pathname: '/files',
      },
    ],
  }
}

module.exports = nextConfig
