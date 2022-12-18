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
        hostname: 'devhal-backend-production.up.railway.app',
        pathname: '/files',
      },
    ],
  }
}

module.exports = nextConfig
