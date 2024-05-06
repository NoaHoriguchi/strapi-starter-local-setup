/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**/*',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
    domains: [
      "smiling-nurture-11f281b589.media.strapiapp.com",
      "localhost:1337"
    ]
  },
}

module.exports = nextConfig
