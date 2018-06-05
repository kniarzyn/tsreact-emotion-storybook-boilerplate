const webpack = require("webpack")

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development"
}
module.exports = {
  entry: [
    "react-hot-loader/patch",
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
