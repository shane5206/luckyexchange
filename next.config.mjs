/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
        },
        {
          protocol: 'https',
          hostname: 'wqnmyfkavrotpmupbtou.supabase.co',
          pathname: '/storage/v1/object/public/**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 60,
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    // PWA configuration
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'Link',
              value: '<https://luckysports.cloud>; rel="canonical"',
            },
          ]
        },
        {
          source: '/product',
          headers: [
            {
              key: 'Link',
              value: '<https://luckysports.cloud/product>; rel="canonical"',
            },
          ],
        },
      ]
    }
  };
  
  export default nextConfig;