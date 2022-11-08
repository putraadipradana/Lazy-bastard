/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "tailwindui.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
