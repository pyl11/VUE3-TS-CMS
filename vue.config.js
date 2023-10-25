const path = require('path')
const { defineConfig } = require('@vue/cli-service')
//element-plus 按需导入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')



module.exports = defineConfig({
  transpileDependencies: true,
  // webpack.config.js element-plus 按需导入
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  //lintOnSave: false //用于指定是否在保存文件时执行代码检查（linting）
  // outputDir: './build'
})
