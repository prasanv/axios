// @ts-check
const path = require('path');

 
/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
    /* config options here */
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './'),
      };
      return config;
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: false,
      },
      images: {
        domains: ['picsum.photos','images.unsplash.com','plus.unsplash.com']
      },
  }
   
  module.exports = nextConfig