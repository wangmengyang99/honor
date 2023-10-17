<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-02 22:15:46
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 00:12:36
 * @FilePath: \honor\src\view\Layout\components\HomePage4.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import {onMounted ,ref, computed } from 'vue'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useElementBounding, useWindowScroll } from '@vueuse/core'

/*获取页面中鼠标滚路位置 */
const groud = ref(null)
const page5=ref(null)
const mage=ref(null)
const centerEllips =ref(null)
const { y }= useWindowScroll()
/*获取目标元素在页面中的数据 */
const { top} = useElementBounding(page5) 
gsap.registerPlugin(ScrollTrigger);
const dubugMakers = true;
/*偏离量 */
let ff=ref(0)
/*页面位置 */
let ops=0
/*判断滚轮位置 */
let direction = 0
const pathLength = 219;
/*节流函数 防止被高频触发 */
function throttle(fn, delay) {
  let lastTime;
  return function () {
    const nowTime = Date.now();
    if (nowTime - lastTime > delay || !lastTime) {
      fn();
      lastTime = nowTime;
    }
  }
}

/*滚轮控制动画函数 */
const add=()=> {
  /* 当滚轮到达视口区域时触发动画*/
  if(y.value>=ops){
      /*true为向上滚动，false向下滚动 */
      
    if ((direction >= y.value)) {
      /*图形消失 offset=200 */
      // console.log('上');
      // console.log(direction);
      // console.log(scr.y.value);
        
        if(y.value - ops <=pathLength){
        ff=computed(()=>Math.min(pathLength, Math.min((pathLength-(y.value - ops) ), pathLength)).toFixed(1))
        groud.value.style.strokeDashoffset = ff.value
        }
    }
    else {
      /*图形出现 offset=0 */
      // console.log('下');
      // console.log(direction);
      // console.log(scr.y.value);
       if(y.value - ops <=pathLength){
        ff=computed(()=>Math.min(pathLength, Math.max((pathLength-(y.value - ops) ), 0)).toFixed(1))
        groud.value.style.strokeDashoffset = ff.value
       }
    }
    /* */
      direction =y.value
  }
 
  //Math.max(0, Math.min(y.value * 0.05, pathLength)).toFixed(1)
}
/* 滚轮事件监听 */
//window.onscroll = throttle(add, 5)

onMounted(()=>{
   window.onscroll = add
   ff = computed(()=>0)
   ops = 0
   direction = 0
  ops = top.value
  /*svg颜色以及透明度变化 */
  gsap.set(groud.value,{stroke:'#D7A85B',})
  const svgColor=gsap.to(groud.value,{stroke:'#000000', strokeWidth:4.6,})
  const svgOpacity = gsap.to(groud.value, { opacity:0.8 })
  ScrollTrigger.create({
    trigger:page5.value,
    pin: true,
    scrub:0.1,
    start:'top top',
    animation:svgColor,
    markers: false,
    end:'+=1200'
  })
    ScrollTrigger.create({
    trigger: page5.value,
    start: 'top top',
    animation: svgOpacity,
    markers: false,
    end: 'top'
  })
  /*中心圆透明度 */
   const setcenter = gsap.to('.ellipse4', {opacity: 1 })
    ScrollTrigger.create({
    trigger: groud.value,
    start: 'center 30%',
    animation: setcenter,
    scrub:0.1,
    markers: false,
    end: '+=0',
  })
   /*svg大小控制 */
  gsap.to(mage.value,{
    scale:1,
    y:0,
    scrollTrigger:{
      trigger:page5.value,
      scrub: 0.1,
      markers:false,
      start:'top 1%',
      end:'+=500',
      pin: true,
    }
  })
  /*大标题动画 */
  gsap.set('.h2', {opacity:0,y:'150%',})
  const h2= gsap.to('.h2', { opacity:1, y:0, })

  ScrollTrigger.create({
    trigger: groud.value,
    scrub: 0.1,
    start: 'top top',
    animation: h2,
    markers: false,
    end: '+=500',
    stagger:0.1
  })
  /*小标题动画 */
  /*链接动画 */
const observerCallBack=(entries,observer)=>{
  entries.forEach(element => {
    console.log(element)    
  });
}
const obsOption={
  root:null,
  threshold:0.1,

}
/*使用intersectionObserver重构路径动画 */
const observer=new IntersectionObserver(observerCallBack);
observer.observe(document.querySelector('.page5'))
 

})




</script>

<template>

  <div class="page5"  ref="page5">
    <div class="box">
  <div class="svgBox">
      <svg ref="mage"  class='mage' width="101px" height="100px" viewBox="0 0 101 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>icon/信任环@3x</title>
      <g class="magic" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="编组-2备份" transform="translate(8.000000, 11.000000)">
            <g id="编组" class="groud" ref="groud" opacity="0" stroke="#000000" stroke-width="4.67532468">
                <ellipse ref="de" class="ellipse1" id="ellipse1" cx="41.5804065" cy="38" rx="17.4746024" ry="38"></ellipse>
                <ellipse class="ellipse2" id="椭圆形" transform="translate(41.580407, 38.000000) rotate(-300.000000) translate(-41.580407, -38.000000) " cx="41.5804065" cy="38" rx="17.5226014" ry="37.8962392"></ellipse>
                <ellipse class="ellipse3" id="椭圆形" transform="translate(41.580407, 38.000000) rotate(-240.000000) translate(-41.580407, -38.000000) " cx="41.5804065" cy="38" rx="17.5226014" ry="37.8962392"></ellipse>
            </g>
            <ellipse ref="centerEllipse"  class="ellipse4" id="椭圆形" fill="#D7A85B" cx="41.5804065" cy="38" rx="5.82486746" ry="5.84615385"></ellipse>
        </g>
        <rect id="矩形" x="0" y="0" width="100" height="100"></rect>
    </g>
  </svg>
    </div>
      <h2 class="h2">MagicRing 信任环</h2>
      <p class="h2">智慧互联 再无界</p>
      <div class="h2" ><a href="#">查看智慧互联产品适配列表&nbsp;&gt;</a></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
   .page5{  
  
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    .box{
      
      margin:auto;
    
      height: 50%;
      width: 50%;
      text-align: center;
    .mage{
      
      transform:translateY(150%) scale(8);
    .groud{
    stroke-width:1.6;
    stroke-dashArray:219,220;
    stroke-dashoffset:219;
    }
    .ellipse4{
      opacity: 0;
    }
  }
  
   }

   }

</style>