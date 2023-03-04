const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      remote: `remote@http://localhost:8081/_next/static/${
        isServer ? 'ssr' : 'chunks'
      }/remoteEntry.js`,
    };
    console.log('isServer', isServer)
    console.log('remotes.remote', remotes.remote)
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: { 
            remote: remotes.remote
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            // './nextjs-remote-component': './components/nextjs-remote-component.js',
            // './nextjs-remote-page': './pages/index.js',
          },
          shared: {
            react: {
              requiredVersion: false,
              singleton: true,
            },
          },
          extraOptions: {
            skipSharingNextInternals: true,
          },
        }),
      );
    }
    return config;
  },
  // your original next.config.js export
  reactStrictMode: true,
};