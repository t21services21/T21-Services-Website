/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static HTML export for One.com
  trailingSlash: false, // Changed to false for proper file structure
}

module.exports = nextConfig
