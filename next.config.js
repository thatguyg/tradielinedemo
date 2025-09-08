/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { 
    appDir: true 
  },
  // Configure for Replit environment - allow all hosts
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
