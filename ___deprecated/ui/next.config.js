/** @type {import('next').NextConfig} */

// Tom B. Custome Build ID here
const date = new Date();
const build_id =
  "REL" +
  new Date()
    .toLocaleString("sv-SE", {
      timeZone: "Europe/London",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    })
    .replace(/[ :\-]/g, "");

const path = require("path");

const nextConfig = {
  basePath: "/en-gb",
  // distDir: 'build', // the default is .next so levae it commented out, it was just a test
  reactStrictMode: true,
  // assetPrefix: '/docs',
  // swcMinify: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "uat-www.cmcmarkets.com",
      "cdn.cmcmarkets.com",
      "assets.cmcmarkets.com",
      "hdev3-assets.cmcmarkets.com",
    ],
  },

  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return build_id;
  },

  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
    CONTENTFUL_PREVIEW_HOST: process.env.CONTENTFUL_PREVIEW_HOST,
    APP_PREVIEW_SECRET: process.env.APP_PREVIEW_SECRET,
    ENV: process.env.ENV,
    URL: process.env.URL,
    BUILD_ID: build_id,
    CUPCAKE_DOMAIN: process.env.CUPCAKE_DOMAIN,
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    VERSION: process.env.npm_package_version || "",
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Tom: these redirects are only to be used in extreme circumstances
  // Reirects should be added to Akamai on a global level, not here.
  async redirects() {
    return [
      {
        source: "/111",
        destination: "/222",
        permanent: true,
      },
    ];
  },

  experimental: {
    esmExternals: false,
  },

  /*
  async rewrites() {
    return [
      { source: '/123/:path*', destination: '/567/:path*' }
    ]
  },
  */

  // Tom: adds / at the end of the url
  // trailingSlash: true,

  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "@": path.resolve(__dirname, "./"),
  //   };

  //   return config;
  // },
};

module.exports = nextConfig;
