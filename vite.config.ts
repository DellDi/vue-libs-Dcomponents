/*
 * @Author: dell di
 * @Date: 2021-07-18 10:45:35
 * @LastEditTime: 2021-09-15 00:14:59
 * @LastEditors: di
 * @Description:
 * @FilePath: \vue-next-libs\vite.config.ts
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // '@': resolve(_dirname, 'src'),
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
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
