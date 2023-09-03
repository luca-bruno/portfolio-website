/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"]
  },
  images: {
    domains: ["highlandcanine.com", "i0.wp.com"]
  }
}

module.exports = nextConfig
