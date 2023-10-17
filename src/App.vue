<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-16 21:18:10
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 13:09:21
 * @FilePath: \honor\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-09-26 08:41:02
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 10:49:48
 * @FilePath: \honor\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import mainNavigation from '@/view/navBat/mainNavigation.vue'
import mainFooter from '@/view/footer/footer.vue'
</script>
  
<template>
    <mainNavigation></mainNavigation>
    <RouterView/>
    <mainFooter></mainFooter>

</template>

<style lang='scss' scoped>
</style>