/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/dataexp'

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  distDir: 'docs',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
