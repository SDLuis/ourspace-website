/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

module.exports = nextConfig
