<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-09-30 23:41:09
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-08 18:05:44
 * @FilePath: \honors\src\view\Layout\components\HomePage1.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { ref,onMounted } from 'vue'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'



onMounted(()=>{
  const gsapTime=gsap.timeline()  
  ScrollTrigger.defaults({ toggleActions: "restart pause resume none", markers: true })
  gsap.set('.svg',{yPercent:50,opacity:0.5})
  gsap.set('.svg1', { yPercent: 150, opacity: 0 })
  gsap.set('.h2', { yPercent: 150, opacity: 0 })
  gsapTime.to('.svg',{ duration: 1,scale:0.8,opacity:1, yPercent: 0 },'<')
  gsapTime.to('.svg1',{duration:1, yPercent:0,scale:0.8,opacity:1},'<+=0.5')
  gsapTime.to('.h2', { duration: 1, yPercent: 0, opacity: 1 }, '<+=0.1')
})
</script>

<template>
  <div class="page1">
     <img class="svg" src="../../../assets/kv.png" alt="">
     <h2 class="svg1"> <img  src="../../../assets/os.SVG" alt=""></h2>
      <h2 class="h2">越用越好用 越用越懂你</h2>
    </div>
</template>

<style lang='scss' scoped>
 .page1{
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  background-color: black;
  text-align: center;
  justify-items: center;
  overflow: hidden;
  img{
    position: relative;
    background-color: black;
    background-blend-mode: lighten;
  }
  .svg1{
     z-index: 2;
     position: relative;
     bottom: 30vh;
     img{
      background-color: transparent;
     }
     
  }
  .h2{
    color: white;
    position: relative;
    bottom: 31vh;
    font-size: 1.4vw;
    z-index: 3;
  }
}
</style>