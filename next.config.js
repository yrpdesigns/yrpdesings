/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "",
        pathname: "/isteam/**",
      },
    ],
  },
};

module.exports = nextConfig;
