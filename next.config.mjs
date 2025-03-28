/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{  hostname: "flowbite.s3.amazonaws.com" }]
   
  },
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
   
  },
};

export default nextConfig;
