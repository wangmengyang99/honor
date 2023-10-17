/*
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-09-26 08:41:02
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 15:27:30
 * @FilePath: \honor\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

//import "@/style/main.scss"
createApp(App).use(router).mount('#app')
