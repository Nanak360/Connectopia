/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "nmxhwicnpvlkkojttkwo.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
// https://nmxhwicnpvlkkojttkwo.supabase.co/storage/v1/object/public/photos/1687447747696Nanak360-linkedin-cover.png
