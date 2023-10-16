<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-01 13:20:56
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-01 18:20:00
 * @FilePath: \honor\src\components\SvgItem.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { onMounted,ref } from 'vue'
import { getHomeNavSvgAPI } from '@/apis/getHomeNavSvg';
import { getElement } from '@/componsables/svgElememt.js'
const box=ref(null)
const setSvg=async()=>{
  const svg= await getHomeNavSvgAPI('../assets/DM_20230926083652_004.SVG')
  getElement(svg.data,box.value)
}
onMounted(()=>{
 setSvg()
})

</script>

<template>
  <div class="page">
  <div ref="box" class="box"></div>
  <h2> <slot name="titleBig">请修改大标题</slot></h2>
  <h3> <slot name="title">请修改小标题</slot></h3>
  </div>
</template>

<style lang='scss' scoped>

</style>