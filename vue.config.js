module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'docs',
  // webpack-dev-server 相关配置
  // devServer: {
  //   port: 8888
  // }
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader',
              options: {
                /*
                  your options here , see marked get more
                */
              }
            }
          ]
        }, {
          test: /\.yml$/,
          loader: 'yml-loader'
        }
      ]
    }
  }
}
