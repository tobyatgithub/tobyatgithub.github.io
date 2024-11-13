/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Only apply to edge runtime
    if (isServer && process.env.NEXT_RUNTIME === 'edge') {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 20 * 1024 * 1024, // 20MB to be safe
        cacheGroups: {
          default: false,
          vendors: false,
        },
      };
    }
    return config;
  },
}

module.exports = nextConfig 