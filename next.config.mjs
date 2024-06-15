/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['stefantopalovicdev.vercel.app', 'images.unsplash.com'],
  },
}

export default nextConfig

// experimental: {
//   appDir: true,
// },