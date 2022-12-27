/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "dead-pear-elephant-tutu.cyclic.app/",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
