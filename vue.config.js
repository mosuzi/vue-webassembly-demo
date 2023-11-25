const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("wasm")
      .test(/\.wasm$/)
      .include.add(/assembly/)
      .end()
      .use("vue-wasm")
      .loader("wasm-loader");
  },
});
