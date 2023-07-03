const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: ["@babel/polyfill", "./src/app/scripts/main.js"],
    home: ["@babel/polyfill", "./src/app/scripts/home.js"],
    signin: ["@babel/polyfill", "./src/app/scripts/signin.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    // publicPath: "build/", //This is where the issue was
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
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 8192,
        //   },
        // },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[path][name].[ext]",
        //       context: path.resolve(__dirname, "src/"),
        //       outputPath: "build/",
        //       publicPath: "../",
        //       useRelativePaths: true,
        //     },
        //   },
        // ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false,
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      // Alias para acceder a las imágenes
      "@images": path.resolve(__dirname, "./src/images"),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),
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
    new MiniCssExtractPlugin({
      filename: "scss/[name].bundle.scss",
      chunkFilename: "scss/[name].bundle.scss",
    }),
  ],
};
