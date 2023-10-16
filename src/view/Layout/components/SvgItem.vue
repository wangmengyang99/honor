<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-02 12:25:15
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-08 18:01:56
 * @FilePath: \honors\src\view\Layout\components\SvgItem.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
</script>

<template>
  <div class="page">
    <div ref="box" class="box">
      <img src="../../../assets/oso.svg" alt="">
    </div>
    <h2>
      <slot name="titleBig">请修改大标题</slot>
    </h2>
    <h3>
      <slot name="title">请修改小标题</slot>
    </h3>
  </div>
</template>

<style lang='scss' scoped>

h2{
  font-size: 1.5vw;
}
h3{
   font-size: 0.5vw;
}
</style>