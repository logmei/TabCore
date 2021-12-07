const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:['./src/index.js'],
  mode:'production',
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
            url:false
            // esModule: true,
            // modules:{
            //   namedExport: true,
            //   localIdentName: "[name]"
            // }
          }
        },
        {
          loader:'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  "autoprefixer",
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        },]
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:[
          {
            loader:'babel-loader'
          }
        ]
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