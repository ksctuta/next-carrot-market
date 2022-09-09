/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // reactStrictMode: false,
  swcMinify: true,
  images: {
    // next js config 이미지 도메인 추가
    domains: ["imagedelivery.net", "videodelivery.net"],
  },
  // React Server Components (RFC)
  // https://nextjs.org/docs/advanced-features/react-18/server-components
  // experimental: {
  //   reactRoot: true,
  //   // runtime: "nodejs",
  //   // serverComponents: true,
  // },
  // experimental: {
  //   runtime: "experimental-edge",
  //   serverComponents: true,
  // },
};

module.exports = nextConfig;
