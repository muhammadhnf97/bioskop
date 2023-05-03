/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RAPIDKEY:'6f8c93a50amshea0626b1a8ee514p1a9e5djsnade62b9207e5',
    RAPIDHOST:'moviesdatabase.p.rapidapi.com'
  },
  images :{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'asset.tix.id',
      }
    ]
  }
}

module.exports = nextConfig

