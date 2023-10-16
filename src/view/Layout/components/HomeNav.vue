<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-09-26 09:04:52
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-16 20:45:20
 * @FilePath: \honors\src\view\Layout\components\HomeNav.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-09-26 09:04:52
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-09-26 10:18:16
 * @FilePath: \honor\src\view\Layout\components\HomeNav.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { getHomeNavSvgAPI } from '@/apis/getHomeNavSvg';
import {ref,onMounted} from 'vue'
import { getElement } from '@/componsables/svgElememt'
import gsap from 'gsap'
const navTitle=[
'手机',
'笔记本',
'平板',
'穿戴',
'智慧屏',
'更多产品',]
</script>

<template>
  <div class="nav">
    <div ref="logo">
      <img src="../../../assets/honor-logo-black.svg" alt="">
    </div>
    <div class="navItem">
      <div class="item">
      <a href="#" v-for="item in navTitle">{{ item }}</a>
      </div>

  </div>
  </div>

</template>

<style lang='scss' scoped>
.nav{
  display:flex ;
  height: 10vh;
  width: 100%;
  max-width: 100%;
  flex-flow: row nowrap;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  overflow: hidden;
  .logo{
    flex: 1;
    background-color: red;
    
  }
  .navItem{
    flex: 1 ;
    display: flex;
    flex-direction: row;
    margin-left: 25vw;
   a{
    margin-left: 2vw;
    cursor: pointer;
   }
  }
}
</style>