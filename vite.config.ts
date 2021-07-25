import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
// const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    WindiCSS(),
  ],
  // resolve: {
  //   alias: {
  //     '/@/': resolve(_dirname, 'src'),
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/assets/styles/variable.scss';`,
      },
    },
  },
})
