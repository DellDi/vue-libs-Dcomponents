import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
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
