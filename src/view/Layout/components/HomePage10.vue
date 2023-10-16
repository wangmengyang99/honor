<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-08 10:37:21
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-08 18:10:36
 * @FilePath: \honors\src\view\Layout\components\HomePage10.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
  gsap.set('.page10 .title',{opacity:0})
  gsap.set('.page10 .subtitle', { opacity: 0 })
  const imgarr=gsap.utils.toArray('.page10 img')
  imgarr.forEach((element)=>{
    gsap.set(element, { opacity: 0 })
  })
  const timeLine = gsap.timeline({
    scrollTrigger:{
      trigger:'.page10',
      start:'top center',
      end:'top',
      scrub:0.1,
    }
  })

  timeLine.to('.page10 .title',{duration:0.5,opacity:1})
  timeLine.to('.page10 .img1',{opacity:1},'<0')
  timeLine.to('.page10 .subtitle',{opacity:1, duration: 0.5 },'<0.5')
  timeLine.to('.page10 .img2',{opacity:1},'<0')
  timeLine.to('.page10 .img3',{opacity:1, duration: 0.5 },'<0.5')

})

</script>

<template>
  <div class="page10">
    <div class="title">
      <h1>多端同步</h1>
      <h1>随处可见</h1>
    </div>
    <div class="subtitle">
      <p>首发电脑版荣耀笔记，帮你更高效的笔记</p>
      <p>整理，更快速的笔记编辑。在荣耀手机、</p>
      <p>平板、电脑设备上，随时随处查看修改</p>
      <p>笔记。</p>
    </div>
    <div class="imageList">
      <img class="img1" src="../../../assets/s5-01.png" alt="">
      <img class="img2" src="../../../assets/s5-02.png" alt="">
      <img class="img3" src="../../../assets/s5-03.png" alt="">
    </div>
  </div>
</template>

<style lang='scss' scoped>
 .page10{
  width: 100vw;
  height: 100vh;
  background-color: rgb(240, 240, 240);
  position: relative;
  .title{
    position: absolute;
    top:15%;
    left: 15%;
    width: 15%;
    height: 15%;

  }
  .subtitle{
    position: absolute;
    width: 20%;
    height: 20%;
    left: 15%;
    top: 30%;
 
  }
  .imageList{
    position: absolute;
    
    top: 15%;
    right: 15%;
    width: 50%;
    height: 50%;

  img{
    position: absolute;
    background: transparent;
  }
  }
 }
</style>