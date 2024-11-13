const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "self": false,
        "window": false,
        "document": false,
        "localStorage": false,
        "sessionStorage": false,
      };
    }

    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 20 * 1024 * 1024,
          cacheGroups: {
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }

    config.cache = false;

    return config;
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig); 