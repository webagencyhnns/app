const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/app.js"),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/home/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/contact/index.html"),
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/services/index.html"),
      filename: "services.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/img/", to: "./assets/img" },
        { from: "./src/assets/fonts/", to: "./assets/fonts" },
        { from: "./src/style.css", to: "./assets/css/" },
      ],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
