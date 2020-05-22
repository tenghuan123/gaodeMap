const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

const PATHS={
  app:path.join(__dirname,'app'),
  build:path.join(__dirname,'build'),
};

module.exports = {
  entry: {
    app:PATHS.app,
  },
  output: {
    path:PATHS.build,
    filename: "[name].js"
  },
  externals: {
    　　'BMap': 'BMap',
    　　'AMap': 'AMap',
　},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',
    })
  ]
};
