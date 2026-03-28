/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dataexp',
  assetPrefix: '/dataexp/',
  distDir: 'docs',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
