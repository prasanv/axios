// @ts-check
 
/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
    /* config options here */
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