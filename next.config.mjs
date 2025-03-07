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
    // 添加重定向规则
    async redirects() {
      return [
        // 首页重定向
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
        {
          source: '/Home',
          destination: '/',
          permanent: true,
        },
        // 联系页面重定向
        {
          source: '/contact',
          destination: '/contact-us',
          permanent: true,
        },
        {
          source: '/Contact Us',
          destination: '/contact-us',
          permanent: true,
        },
        // 关于页面
        {
          source: '/about',
          destination: '/about-us',
          permanent: true,
        },
        {
          source: '/About',
          destination: '/about-us',
          permanent: true,
        },
        // 其他页面
        {
          source: '/pricing',
          destination: '/product',
          permanent: true,
        },
        {
          source: '/docs',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/news',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/service',
          destination: '/product',
          permanent: true,
        },
      ];
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
        {
          source: '/contact-us',
          headers: [
            {
              key: 'Link',
              value: '<https://luckysports.cloud/contact-us>; rel="canonical"',
            },
          ],
        },
        {
          source: '/blog',
          headers: [
            {
              key: 'Link',
              value: '<https://luckysports.cloud/blog>; rel="canonical"',
            },
          ],
        },
      ]
    }
  };
  
  export default nextConfig;