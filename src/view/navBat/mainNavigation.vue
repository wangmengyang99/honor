<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-17 10:50:33
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 18:59:56
 * @FilePath: \honor\src\view\navBat\mainNavigation.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-17 10:50:33
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 13:57:16
 * @FilePath: \honor\src\view\navBat\mainNavigation.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { onMounted } from 'vue'
</script>

<template>
  <div class="mainNav">
    <div class="mainNav__logo">
      <img src="../../assets/honor-logo-black.svg" alt="">
    </div>
    <div class="mainNav__Items">
        <router-link class="mainNav__Items__Item mainNav__Items-1" to="/bauhaus">bauhaus</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-2" to="/cyberpunk">cyberpunk</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-3" to="/memphis">memphis</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-4" to="/minimalist">minimalist</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-5" to="/steam">steam</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-6" to="/wide">wide</router-link>
      </div>
      <div class="mainNav__backChange">

      </div>
  </div>
</template>

<style lang='scss' scoped>
.mainNav {
  display: flex;
  height: 3rem;
  width: 100%;
  max-width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  overflow: hidden;
 z-index: 9999;
  &__logo {
    background-color: red;
  }
/*测试 */
 &__Items{
  display: flex;
  flex: 1;
  gap: 30px;
  &__Item{
    position: relative;
    font-size: 1rem;
    text-decoration: none;
    color: $color-button-blue;
    letter-spacing: 0.25rem;
    line-height: 1rem;
    text-transform: capitalize;
  }
}
&__backChange{
  width: 10rem;
  height: 10rem;
  background-image: linear-gradient(to right bottom,rgb(45, 147, 215),rgb(33, 211, 92));
 
}
  
  
}
</style>