module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'docs',
  // webpack-dev-server 相关配置
  devServer: {
    //   port: 8888
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7890',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/userA'
        }
      }
    }

    //   proxyTable: {
    //     '/api': {
    //       target: '', // 由于本地8080被占用，运行时端口是8081；（设置调用接口域名和端口号别忘了加http
    //       changeOrigin: true,  // 是否跨域
    //       pathRewrite: {
    //         '^/api': '/static/mock' // 这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
    // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
    // }
    // }
    // }
  },
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
