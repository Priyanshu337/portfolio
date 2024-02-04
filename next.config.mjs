/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['stefantopalovicdev.vercel.app','images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
