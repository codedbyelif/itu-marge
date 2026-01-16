import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kontrolmatik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ercanotomasyon.com.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aa.com.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.metanglobal.com.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kozakmadencilik.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
