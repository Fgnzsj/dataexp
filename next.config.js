/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fgnzsj.github.io/dataexp/docs',
  assetPrefix: '/fgnzsj.github.io/dataexp/docs',
  distDir: 'docs',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
