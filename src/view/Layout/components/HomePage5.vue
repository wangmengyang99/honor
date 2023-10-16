<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-06 20:59:45
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-08 18:16:10
 * @FilePath: \honors\src\view\Layout\components\HomePage5.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { onMounted} from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


onMounted(()=>{
  gsap.set('.page6 .title', { opacity:0, y:'50%' })
  gsap.set('.page6 .videoBox', { opacity: 0, y: '10%' })
  gsap.set('.page7 .title', { opacity: 0, y: '50%' })
  gsap.set('.page7 .videoBox', { opacity: 0, y: '10%' })
  gsap.set('.page8 .title', { opacity: 0, y: '50%' })
  gsap.set('.page8 .videoBox', { opacity: 0, y: '10%' })
  const l1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.page6',
      start: 'top center',
      end: '+=200',
      markers: false,
      scrub: 0.1,
    }
  })
  l1.to('.page6 .title', { opacity:1, y:0,duration:1 })
  l1.to('.page6 .videoBox', { opacity: 1, y: 0 ,duration:1},"<1")
  
  const l2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.page7',
      start: 'top center',
      end: '+=200',
      markers: false,
      scrub: 0.1,
    }
  })
  l2.to('.page7 .title', { opacity: 1, y: 0, duration: 1 })
  l2.to('.page7 .videoBox', { opacity: 1, y: 0, duration: 1 }, "<1")

    const l3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.page8',
      start: 'top center',
      end: '+=200',
      markers: false,
      scrub: 0.1,
    }
  })
  l3.to('.page8 .title', { opacity: 1, y: 0, duration: 1 })
  l3.to('.page8 .videoBox', { opacity: 1, y: 0, duration: 1 }, "<1")
})
</script>

<template>

  <div class="page6">
    <div class="box">
      <div class="title">
        <div class="oneTitle">
          <h1>三指上滑</h1>
          <h1>万物互联</h1>
        </div>
        <div class="twoTitle">
          <p>三指上滑，进入控制中心，</p>
          <p>拖动图标触碰周围的荣耀设备，一步开展多设备协同；</p>
          <p>在App里，以上述相同操作，还可实现应用任务流转。</p>
        </div>
      </div>
      <div class="videoBox">
        <video src="../../../assets/mv2.mp4"></video>
      </div>
    </div>
  </div>

    <div class="page7">
      <div class="box">
        <div class="title">
          <div class="oneTitle">
            <h1>三指上滑</h1>
            <h1>万物互联</h1>
          </div>
          <div class="twoTitle">
            <p>三指上滑，进入控制中心，</p>
            <p>拖动图标触碰周围的荣耀设备，一步开展多设备协同；</p>
            <p>在App里，以上述相同操作，还可实现应用任务流转。</p>
          </div>
        </div>
        <div class="videoBox">
          <video src="../../../assets/mv2.mp4"></video>
        </div>
      </div>
    </div>

      <div class="page8">
        <div class="box">
          <div class="title">
            <div class="oneTitle">
              <h1>三指上滑</h1>
              <h1>万物互联</h1>
            </div>
            <div class="twoTitle">
              <p>三指上滑，进入控制中心，</p>
              <p>拖动图标触碰周围的荣耀设备，一步开展多设备协同；</p>
              <p>在App里，以上述相同操作，还可实现应用任务流转。</p>
            </div>
          </div>
          <div class="videoBox">
            <video src="../../../assets/mv2.mp4"></video>
          </div>
        </div>
      </div>
</template>

<style lang='scss' scoped>
.page6,.page7,.page8{
  width: 100vw;
  height: 100vh;
  display: flex;

  .box{

    margin: auto;
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .title{
      flex: 1 0 10%;

      display: flex;
      flex-direction: row;
      .oneTitle{
        flex: 1 0 10%;

      }
      .twoTitle{
        flex: 2 0 20%;
   
      }
    }
    .videoBox{
      flex: 4 0 40%;

      video{
        width: 100%;
        height: 100%;
        border-radius: 10vh;
      }
    }
  }
}
</style>