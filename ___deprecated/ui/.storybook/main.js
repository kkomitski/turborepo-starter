import { dirname, join } from "path";
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// const { sassLoaderOptions } = require('@xxx/config/app/styles/sass-options');
// const { svgConfig } = require('@xxx/config/webpack-helpers');

module.exports = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)", "../**/*.examples.@(ts|tsx)"],
  staticDirs: ["../public", "../../../apps/neptune/public"],

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),

  addons: [
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    // Add css-loader, style-loader, postcss-loader
    // {
    //   name: "@storybook/addon-postcss",
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require("postcss"),
    //     },
    //   },
    // },
    getAbsolutePath("@storybook/addon-links"),
    // getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/preset-scss"),
    // getAbsolutePath("@storybook/addon-styling-webpack"),
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  implementation: require.resolve("postcss"),
                },
              },
            ],
          },
        ],
      },
    },

    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
  ],

  // core: {
  //   builder: getAbsolutePath("webpack5"),
  // },

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  webpackFinal: async (config) => {
    // resolve problem with typescript aliases
    config.resolve.alias = {
      ...config.resolve?.alias,
      // ...tsconfigResolveAliases(path.resolve(__dirname, '../tsconfig.json')),
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };

    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    // config.externals = { react: "React" };

    config.module.rules.push(
      {
        test: /\.m?[jt]sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
              // ["@babel/preset-env", { targets: { node: "current" } }],
            ],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      }
    );

    // config.module.rules.push({
    //   test: /\.js$|jsx/,
    //   use: [
    //     {
    //       loader: "postcss-loader", // required for tailwind
    //       options: {
    //         implementation: require("postcss"), // postcss 8
    //         postcssOptions: {
    //           config: path.resolve(__dirname, "../postcss.config.js"),
    //         },
    //       },
    //     },
    //     {
    //       loader: "sass-loader",
    //       options: {
    //         // sourceMap: true,
    //         implementation: require("sass"), // dart sass
    //       },
    //     },
    //   ],
    // });

    // config.plugins.push({
    //   name: "@storybook/addon-styling-webpack",
    //   options: {
    //     plugins: [new MiniCssExtractPlugin()],
    //   },
    // });

    // config.module.rules.push({
    //   test: /\.(css|sass|scss)$/,
    //   use: [
    //     "style-loader",
    //     "css-loader",
    //     {
    //       loader: "postcss-loader",
    //       options: {
    //         // Necessary for external CSS imports to work
    //         ident: "postcss",
    //         plugins: [require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
    //       },
    //     },
    //     "sass-loader",
    //   ],
    //   include: path.resolve(__dirname, "../"),
    // });

    // SVG config
    // modify storybook's file-loader rule to avoid conflicts with our svgConfig
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test(".svg"));

    fileLoaderRule.exclude = /\.svg$/;

    return config;
  },

  // managerWebpack: async (config, options) => {
  //   // update webpack config to support sass files here
  //   return config;
  // },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
