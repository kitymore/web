import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
// https://vitejs.dev/config/

// 按需引入elementui组件
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域
    // TODO
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  build: {
    rollupOptions: {
      output: {
        // 解决打包时Some chunks are larger警告
        // eslint-disable-next-line consistent-return
        manualChunks(id) {
          if (id.includes('node_modules') && id.toString().split('node_modules/')[1].split('/')[0].includes('xlsx')) {
            console.log(id.toString().split('node_modules/')[1])
            return 'xlsx'
          }
          return 'wq'

          // if (id.includes('node_modules')) {
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString()
          // }
        }
      }
    }
  }
})
