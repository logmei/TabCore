const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:'./src/',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname,'lib'),
    library:'TabCore'
  },
  resolveLoader:{
    modules:[
      'node_modules',
      path.resolve(__dirname,'loaders')
    ]
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // loader:"ExtractCssFile"
          },
        {
          loader:"css-loader",
          options:{
            esModule: true,
            modules:{
              namedExport: true,
              localIdentName: "[name]"
            }
          }
        }]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:"[name].css",
      chunkFilename:"[id].css"
    })
  ]
}