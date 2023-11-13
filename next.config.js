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
  }
   
  module.exports = nextConfig