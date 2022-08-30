/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //reactStrictMode: false,
  swcMinify: true,
  images: {
    // next js config 이미지 도메인 추가
    domains: ["imagedelivery.net","videodelivery.net"],
  },
};

module.exports = nextConfig;
