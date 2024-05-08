const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  // images: {
    // domains: ['upload.wikimedia.org','elizabethmayorga.com.ec'],
  // },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./luigi": "./components/luigi",
        "./allan": "./components/allan",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};