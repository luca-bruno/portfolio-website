/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"]
  },
  images: {
    domains: ["highlandcanine.com", "i0.wp.com", "media.licdn.com"]
  }
}

module.exports = nextConfig
