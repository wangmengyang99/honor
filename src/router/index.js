/*
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-17 10:33:12
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-18 12:59:47
 * @FilePath: \honor\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory } from "vue-router";
import homeView from '@/view/Layout/index.vue';
import bauhaus from '@/view/bauhaus/index.vue';
import cyberpunk from '@/view/cyberpunk/index.vue';
import memphis from '@/view/memphis/index.vue';
import minimalist from '@/view/minimalist/index.vue';
import steam from '@/view/steam/index.vue';
import wide from '@/view/wide/index.vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: bauhaus },
    { path: '/bauhaus', component: bauhaus },
    { path: '/cyberpunk', component: cyberpunk },
    { path: '/memphis', component: memphis },
    { path: '/minimalist', component: minimalist },
    { path: '/steam', component: steam },
    { path: '/wide', component: wide },
  ],
  scrollTo: {
    top: 0,
  }
})
export default router