<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-07 00:06:07
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-08 18:16:46
 * @FilePath: \honors\src\view\Layout\components\HomePage11.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import gsap  from 'gsap'
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
  gsap.set('.page11 .ScrollBox2',{xPercent:-55,scale:0.8})
  const sections= gsap.utils.toArray('.page11 .scrollTweens')
  const scrollTween=gsap.to(sections,{
    xPercent:-100*(sections.length-1)+35,
    ease:'none',
    duration:1,
    scrollTrigger:{
      trigger:'.page11',
      start:'top top',
      pin:true,
      scrub:0.1,
      end:'bottom',
      pin: true,
    }
  })
  gsap.to('.page11 .ScrollBox2',{
     filter:'none',
     scale:1,
     scrollTrigger:{
      trigger: '.page11 .ScrollBox2',
      start: 'left 70%',
      scrub:0.1,
      containerAnimation:scrollTween,
      
     }
  })
  gsap.to('.page11 .ScrollBox1', {
    filter: 'none',
    duration: 1,
    scale: 0.8,
    xPercent:-40,
    scrollTrigger: {
      trigger: '.page11 .ScrollBox2',
      start: 'left 65%',
      scrub: 0.1,
      containerAnimation: scrollTween,
    }
  })

  ;['c3','c4'].forEach((e,i)=>{
    ScrollTrigger.create({
      triggers:'.'+e,
      containerAnimation: scrollTween,
      start: "left 30%",
      end: i === sections.length ? "right right" : "right 30%",
    })
  })

})
</script>

<template>
  <div class="page11">
     <div class="box">
      
        <div class="scrollTweens c3">
           <div class="ScrollBox1 sbox">
            <div class="title" >
              <h1>重要不错过</h1>
              <h1>重在不打扰</h1>
              <p>直接在当前使用的荣耀设备上，</p>
              <p>支持定制查看和回复所有手机通知消息。</p>
              <p>重要信息不容错过，专注工作不被打扰1。</p>
            </div>
              <div class="video">
                <video src="../../../assets/mv2.mp4"></video>
              </div>
           </div>
        </div>

        <div class="scrollTweens c4">
          <div class="ScrollBox2 sbox">
              <div class="title" >
                <h1>重要不错过</h1>
                <h1>重在不打扰</h1>
                <p>直接在当前使用的荣耀设备上，</p>
                <p>支持定制查看和回复所有手机通知消息。</p>
                <p>重要信息不容错过，专注工作不被打扰1。</p>
              </div>
                <div class="video">
                  <video src="../../../assets/mv2.mp4"></video>
                </div>
          </div>
        </div>
     </div>
  </div>
</template>

<style lang='scss' scoped>
.page11{
   width: 100vw;
   height: 100vh;
   overflow: visible;
   .box{
     display: flex;
     flex-wrap: nowrap;
     width: 100%;
     height: 100%;

  
     .scrollTweens{
      flex: 1 0 100%;
      background-color: rgb(240, 240, 240);
      width: 100vw;
      height: 100vh;
      display: flex;
        .sbox{
         margin: auto;
         width: 65%;
          height: 46%;
          background-color: rgb(252, 252, 252); 
          border-radius: 5vh;
          display: flex;
          .title{
           flex: 2;
          width: 100%;
          height: 100%;
          margin-top: 10%;
          margin-left: 10%;
          }
          video{
          flex: 3;
          width: 100%;
          height: 100%;
          border-radius:0  5vh 5vh 0;
          }
        }
     }
      .c3{
        .ScrollBox1{
         
        }
    }
    .c4{
      .ScrollBox2{
        filter: blur(5px);
      }
    }
   }
}
</style>