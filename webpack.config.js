const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
// const sass = require("sass");
module.exports = {
  mode: "none",
  entry: {
    app: ["@babel/polyfill", "./src/app/scripts/main.js"],
    home: ["@babel/polyfill", "./src/app/scripts/home.js"],
    signin: ["@babel/polyfill", "./src/app/scripts/signin.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].bundle.js",
  },
  target: ["web", "es6"],
  devServer: {
    port: 5050,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: "images",
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      // Alias para acceder a las imágenes
      "@images": path.resolve(__dirname, "./src/app/images"),
    },
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.emit.tap("GenerateImageListPlugin", (compilation) => {
          const imageFiles = glob.sync(
            "src/app/images/**/*.+(png|jpe?g|gif|svg)"
          );
          const imageList = imageFiles.map((filePath) => {
            const relativePath = filePath.replace("src/", "");
            return `import '${relativePath}';`;
          });

          const imageListContent = imageList.join("\n");
          compilation.assets["imageList.js"] = {
            source: () => imageListContent,
            size: () => imageListContent.length,
          };
        });
      },
    },
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["app"],
    }),
    new HTMLWebpackPlugin({
      filename: "home.html",
      template: "./src/app/pages/home.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["home"],
    }),
    new HTMLWebpackPlugin({
      filename: "signin.html",
      template: "./src/app/pages/signin.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["signin"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css",
      chunkFilename: "css/[name].bundle.css",
    }),
  ],
};
