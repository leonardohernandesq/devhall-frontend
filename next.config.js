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
        hostname: 'devhall-backend.vercel.app/',
        port: '3000',
        pathname: '/files',
      },
    ],
  }
}

module.exports = nextConfig
