<script setup>
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useElementBounding, useWindowScroll } from '@vueuse/core'
gsap.registerPlugin(ScrollTrigger);
/*获取页面中鼠标滚路位置 */
const groud = ref(null)
const page5 = ref(null)
const mage = ref(null)
const centerEllips = ref(null)
const { y } = useWindowScroll()
/*获取目标元素在页面中的数据 */
const { top } = useElementBounding(page5)

const dubugMakers = true;
/*偏离量 */
let ff = ref(0)
/*页面位置 */
let ops = 0
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
const add = () => {
  /* 当滚轮到达视口区域时触发动画*/
  if (y.value >= ops) {
    /*true为向上滚动，false向下滚动 */

    if ((direction >= y.value)) {
      /*图形消失 offset=200 */
      // console.log('上');
      // console.log(direction);
      // console.log(scr.y.value);

      if (y.value - ops <= pathLength) {
        ff = computed(() => Math.min(pathLength, Math.min((pathLength - (y.value - ops)), pathLength)).toFixed(1))
        groud.value.style.strokeDashoffset = ff.value
      }
    }
    else {
      /*图形出现 offset=0 */
      // console.log('下');
      // console.log(direction);
      // console.log(scr.y.value);
      if (y.value - ops <= pathLength) {
        ff = computed(() => Math.min(pathLength, Math.max((pathLength - (y.value - ops)), 0)).toFixed(1))
        groud.value.style.strokeDashoffset = ff.value
      }
    }
    /* */
    direction = y.value
  }

  //Math.max(0, Math.min(y.value * 0.05, pathLength)).toFixed(1)
}
/* 滚轮事件监听 */
//window.onscroll = throttle(add, 5)

onMounted(() => {
  window.onscroll = add
  ff = computed(() => 0)
  direction = 0
  ops = top.value+100
  
  /*svg颜色以及透明度变化 */

  gsap.set('.h1', { opacity: 0, y: '150%', })
  gsap.set('.p1', { opacity: 0, y: '150%', })
  gsap.set('.a1', { opacity: 0, y: '150%', })
  ScrollTrigger.defaults({
   markers: {startColor: "transparent", endColor: "transparent",}
  })
  let timeLine=gsap.timeline({
    scrollTrigger:{
      trigger:page5.value,
      pin:true,
      start: 'top top',
      end:'+=1200',
      scrub:0.1,
  
    }
  })
timeLine.addLabel("myLabel", 1);
timeLine.to(groud.value, { opacity:0.9, duration: 0.1 })
timeLine.to(groud.value,{ toggleClass:'.action',duration:0},'<0')
timeLine.to(groud.value,{ stroke:'#000000',duration:1, strokeWidth: 4 },"<3")
timeLine.to(mage.value, { scale: 1.4, y: 0, duration: 3, }, "myLabel")
timeLine.to('.ellipse4', { opacity: 1 ,duration:0.1},"<0")

timeLine.to('.h1',{ opacity: 1, y: 0, duration:2},"+=0.5")
timeLine.to('.p1', { opacity: 1, y: 0, duration: 2 }, "+=0.5")
timeLine.to('.a1', { opacity: 1, y: 0, duration: 2 }, "+=0.5")
})




</script>

<template>
  <div class="page5" ref="page5">
    <div class="box">
      <div class="svgBox">
        <svg ref="mage" class='mage' width="101px" height="100px" viewBox="0 0 101 100" version="1.1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>icon/信任环@3x</title>
          <g class="magic" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="编组-2备份" transform="translate(8.000000, 11.000000)">
              <g id="编组" class="groud" ref="groud" opacity="0" stroke="#D7A85B" stroke-width="4.67532468">
                <ellipse ref="de" class="ellipse1" id="ellipse1" cx="41.5804065" cy="38" rx="17.4746024" ry="38">
                </ellipse>
                <ellipse class="ellipse2" id="椭圆形"
                  transform="translate(41.580407, 38.000000) rotate(-300.000000) translate(-41.580407, -38.000000) "
                  cx="41.5804065" cy="38" rx="17.5226014" ry="37.8962392"></ellipse>
                <ellipse class="ellipse3" id="椭圆形"
                  transform="translate(41.580407, 38.000000) rotate(-240.000000) translate(-41.580407, -38.000000) "
                  cx="41.5804065" cy="38" rx="17.5226014" ry="37.8962392"></ellipse>
              </g>
              <ellipse ref="centerEllipse" class="ellipse4" id="椭圆形" fill="#D7A85B" cx="41.5804065" cy="38"
                rx="5.82486746" ry="5.84615385"></ellipse>
            </g>
            <rect id="矩形" x="0" y="0" width="100" height="100"></rect>
          </g>
        </svg>
      </div>
      <div class="h1">MagicRing 信任环</div>
      <p class="p1">智慧互联 再无界</p>
      <div class="a1"><a href="#">查看智慧互联产品适配列表&nbsp;&gt;</a></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.page5 {

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;

  .box {

    margin: auto;
  
    height: 50%;
    width: 50%;
    text-align: center;
    .h1{
      font-size: 3vw;
      font-weight: 555;
       margin-bottom: 1vw;
    }
    .p1{
      font-size: 2.2vw;
       font-weight: 555;
      margin-bottom: 1vw;
    }
    .a1{
       a{
       font-size: 1vw;
       color: #2b18d4;
       }
      
    }
    .mage {

      transform: translateY(150%) scale(8);

      .groud {
        stroke-width: 1;
        stroke-dashArray: 219, 220;
        stroke-dashoffset: 219;
      }
      .action{
         stroke-dashoffset: 0;
      }
      .ellipse4 {
        opacity: 0;
      }
    }

  }

}</style>