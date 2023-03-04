// const NextFederationPlugin = require('@module-federation/nextjs-mf');
// const routesConfig = require('./routeConfig').routesConfig;
// console.log('routesConfig', routesConfig)
// module.exports = {
//   // swcMinify: true,
//   webpack(config, options) {
//     const { isServer } = options;
//     const remotes = {
//       host: `host@http://localhost:8080/_next/static/${
//         isServer ? 'ssr' : 'chunks'
//       }/remoteEntry.js`,
//     };
//     console.log('isServer', isServer)
//     console.log('remotes.host', remotes.host)
//     if (!options.isServer) {
//       config.plugins.push(
//         new NextFederationPlugin({
//           name: 'remote',
//           remotes: {
//             remote: remotes.host
//           },
//           filename: 'static/chunks/remoteEntry.js',
//           exposes: {
            // './nextjs-remote-component': './components/nextjs-remote-component.js',
            // './nextjs-remote-page': './pages/index.js',
            // './App': './components/App.js',
            // './staticPage': './pages/testPage.js',
            // './pages-map': './pages-map.js',
            // './TestRoute': './pages/index.js',
            // './AboutRoute': './pages/about.js',
//             // ...routesConfig
//           },
//           shared: {
//             react: {
//               requiredVersion: false,
//               singleton: true,
//             },
//           },
//           extraOptions: {
//             skipSharingNextInternals: true,
//           },
//         }),
//       );
//     }
//     return config;
//   },
//   // your original next.config.js export
//   reactStrictMode: true,
// };

const { withFederatedSidecar } = require('@module-federation/nextjs-ssr');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    host: `host@http://localhost:8080/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = withFederatedSidecar(
  {
    name: 'remote',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
      './nextjs-remote-component': './components/nextjs-remote-component.js',
      './nextjs-remote-page': './pages/index.js',
      './App': './components/App.js',
      './staticPage': './pages/testPage.js',
      './pages-map': './pages-map.js',
      './TestRoute': './pages/index.js',
      './AboutRoute': './pages/about.js',
    },
    remotes,
    shared: {
      react: {
        // Notice shared are NOT eager here.
        requiredVersion: false,
        singleton: true,
      },
    },
  },
  {
    ssr: true, // if you want to disable the server runtimes, set to false. This will mean client side only.
    removePlugins: [
      // optional
      // these are the defaults
      "BuildManifestPlugin",
      "ReactLoadablePlugin",
      "DropClientPage",
      "WellKnownErrorsPlugin",
      "ModuleFederationPlugin",
      "NextJsRequireCacheHotReloader",
      "PagesManifestPlugin",
    ],
    publicPath: "auto", // defaults to 'auto', is optional
  },
  {
    experiments: {
      flushChunks: true,
      hot: true,
    },
  },
)({
  webpack5: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-ssr/lib/federation-loader.js',
    });

    return config;
  },
});
