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
        protocol: 'https',
        hostname: 'devhal-backend-production.up.railway.app/',
        port: '3000',
        pathname: '/files',
      },
    ],
  }
}

module.exports = nextConfig
