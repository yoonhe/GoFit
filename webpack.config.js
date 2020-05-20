const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
    compress: true,
    port: 8888, // 각자의 portNumber 작성
    // 개발을 위해 필요한 서버
    // 스태틱..! 갖고있음 된다(서버 필요 없음) - 정적

    historyApiFallback: true, // 어떤 기능인지 알아보기 !!
    // 왜 될까?...
    // 빠진다?
    // 히스토리 저장 api???
    //
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    // publicPath: '/', => dist 폴더 안에 index.js에 /bundle.js 이렇게 절대경로로 표시됨.
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: `./public/index.html`,
    }),
  ],
};
