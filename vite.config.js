/*
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-16 21:17:22
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-16 21:37:52
 * @FilePath: \honor\vite.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base:'./',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
