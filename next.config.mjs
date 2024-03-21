/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
    domains: ['images.pexels.com', 'www.instagram.com'],
  },
};

export default nextConfig;
