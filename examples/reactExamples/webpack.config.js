const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry:'./app.tsx',
  mode:'development',
  resolve:{
    extensions:['.tsx','.ts','.js']
  },
  output:{
    filename:'index.js',
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin()
  ]
}