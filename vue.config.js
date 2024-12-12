const path = require("node:path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const pages = {};

const chromeName = ["popup", "background", "options", "content"];

chromeName.forEach((name) => {
  pages[name] = {
    entry: `src/pages/${name}/main.js`,
    template: "public/index.html",
    filename: `${name}.html`,
  };
});

module.exports = {
  pages,
  filenameHashing: false,
  productionSourceMap: false, // 禁用 Source Map，避免引入 eval
  configureWebpack: {
    devtool: false, // 完全禁用 source map，确保 eval 不生成
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm-browser.js", // 使用 runtime-only 版本的 Vue
      },
    },
    optimization: {
      minimize: true, // 确保代码被最小化
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve("manifest.json"),
            to: `${path.resolve("dist")}/manifest.json`,
          },
        ],
      }),
    ],
  },
};
