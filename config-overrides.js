module.exports = {
  devServer: function (configFunction) {
    console.log("dev server overrides");
    return function (proxy, allowedHost) {

      const config = configFunction(proxy, allowedHost);

      config.proxy = {
        "/api": {
          target: "https://extensi.io",
          changeOrigin: true,
        },
      };

      return config;
    };
  },
};
