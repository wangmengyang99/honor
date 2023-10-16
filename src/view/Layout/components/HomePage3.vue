<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-01 10:49:27
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-08 15:10:27
 * @FilePath: \honor\src\view\Layout\components\HomePage3.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-01 10:49:27
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-02 21:54:11
 * @FilePath: \honor\src\view\Layout\components\HomePage3.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { onMounted,ref } from 'vue'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SvgItem from './SvgItem.vue';
const title=ref(null)
const page3=ref(null)
const icons = ref(null)
const dubugMakers=false;


onMounted(() => {
  gsap.set(title.value,{y:100})
  gsap.set(icons.value, { y: 100 })
  const gsap1 = gsap.to(title.value, {
    opacity: 1,
    ease: 'none',
    y:0
  })

  const gsap2 = gsap.to(icons.value, {
    opacity: 1,
    ease: 'none',
    y:0
  })
  ScrollTrigger.defaults({
    toggleActions: "restart none resume none",
    markers: false
  });
  
 ScrollTrigger.create({
  trigger:page3.value,
  scrub:0.5,
  start:'top center',
  endTrigger:title.value,
  end:'bottom 70%',
  animation:gsap1,
  markers: dubugMakers,
 })
  ScrollTrigger.create({
    trigger: page3.value,
    scrub: 0.5,
    start: 'top 15%',
    markers: dubugMakers,
    end: 'bottom bottom',
    animation: gsap2,
  })

  

})


</script>

<template>
  <div class="page3" ref="page3">
    <h1 class="title" ref="title">
      4大技术加持 共筑新体验
    </h1>
    <div class="icons" ref="icons">
       <SvgItem>
        <template v-slot:titleBig>MagicRing 信任环</template>
        <template v-slot:title>跨系统可信互联</template>
       </SvgItem>
      <SvgItem>
          <template v-slot:titleBig>Magic Live 智慧引擎</template>
          <template v-slot:title>平台级AI能力</template>
         </SvgItem>
      <SvgItem>
          <template v-slot:titleBig>Turbo X 系统引擎</template>
          <template v-slot:title>内核级底层性能增强</template>
         </SvgItem>
      <SvgItem>
          <template v-slot:titleBig>MagicGuard 荣耀安全</template>
          <template v-slot:title>三重安全防护体系</template>
         </SvgItem>
    </div>
  </div>

</template>

<style lang='scss' scoped>
.page3{
  width: 100vw;
  max-width: 100%;
  height: 100vh;
 overflow: hidden;
 text-align: center;
 justify-items: center;
 
 .title{
  opacity: 0;
  font-size: 2.2vw;
  margin-top: 35vh;
  margin-bottom: 10vh;
 }
 .icons{
   opacity: 0;
  display: flex;
  width: 90vw;
  height: auto;
  margin:0 auto;
  text-align: center;
  justify-items: center;
 

  div{
    flex:1 0;
    
    margin: 10px;
  }
 }
}

</style>