const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    useDataFetching: "./hooks/useDataFetching.tsx",
    Button: "./components/Button/Button.tsx",
    List: "./components/List/List.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      type: "commonjs-module",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8082,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shared_resources",
      filename: "remoteEntry.js",
      exposes: {
        "./hooks/useDataFetching": "./hooks/useDataFetching.tsx",
        "./components/Button/Button": "./components/Button/Button.tsx",
        "./components/List/List": "./components/List/List.tsx",
        "./components/LazyLoadedImage/LazyLoadedImage":
          "./components/LazyLoadedImage/LazyLoadedImage.tsx",
        "./components/Header/Header": "./components/Header/Header.tsx",
        "./components/Footer/Footer": "./components/Footer/Footer.tsx",
        "./components/Dropdown/Dropdown": "./components/Dropdown/Dropdown.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
