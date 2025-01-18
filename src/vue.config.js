const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  },
  devServer: {
    port: 8080,
  },
};
