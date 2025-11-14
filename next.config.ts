import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:'images.unsplash.com'
      },
      {
        hostname:'avatar.iran.liara.run'
      },
      {
        hostname:'img.clerk.com'
      }
    ]
  }
};

export default nextConfig;
