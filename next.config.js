/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.icons8.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "www.material-tailwind.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "drive.google.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ui-avatars.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = {
    webpack: (config) => {
      console.log(config); // Prints the modified webpack config
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  