const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true, // HTML5의 History API를 사용할 때, 라우팅 설정한 url에 접근할 때 html파일을 서빙할지를 결정
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/' // webpack plugin들이나 html, css등의 루트 경로
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: { // import 하는 파일의 확장자명을 나열
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR, hot 설정
    new HtmlWebpackPlugin({ // 결과물을 위해
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
};
