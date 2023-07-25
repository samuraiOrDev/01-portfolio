/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "unsplash.it",
      "flowbite.com",
      "img.freepik.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
