/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wqnmyfkavrotpmupbtou.supabase.co',
          port: '',
          pathname: '/storage/v1/object/public/**',
        }
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
            }
          ]
        }
      ]
    }
  };
  
  export default nextConfig;