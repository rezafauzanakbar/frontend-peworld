/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "handbag-duckling.cyclic.app", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
