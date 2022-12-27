/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "zany-gold-wombat-wear.cyclic.app",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
