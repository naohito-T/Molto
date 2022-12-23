/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'images.microcms-assets.io'],
  },
  swcMinify: true,
  // @see pageExtensions https://zenn.dev/uttk/articles/d6be1c224494cb
  pageExtensions: ['page.tsx', 'page.ts'],
  optimizeFonts: true,
  compiler: {
    styledComponents: true,
    // TODO: 以下を開発環境では削除しない
    // removeConsole: true,
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },
  // 国際対応する場合に使用する
  // i18n: {
  //   locales: ['en', 'ja'],
  //   defaultLocale: 'ja',
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
