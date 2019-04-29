module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname + '/docs/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "source-map",
  target: "web"
};