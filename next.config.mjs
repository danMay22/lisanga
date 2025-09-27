/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "flowbite.s3.amazonaws.com" },
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
