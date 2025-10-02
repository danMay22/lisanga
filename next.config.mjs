/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "flowbite.s3.amazonaws.com" },
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
