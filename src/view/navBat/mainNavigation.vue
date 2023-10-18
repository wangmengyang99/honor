<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-17 10:50:33
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-18 16:39:15
 * @FilePath: \honor\src\view\navBat\mainNavigation.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-17 10:50:33
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 13:57:16
 * @FilePath: \honor\src\view\navBat\mainNavigation.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup>
import { onMounted } from "vue"

</script>

<template>
  <div class="mainNav">
    <div class="mainNav__logo">
      <img src="../../assets/honor-logo-black.svg" alt="">
    </div>
    <div class="mainNav__Items">
        <router-link class="mainNav__Items__Item mainNav__Items-1" to="/bauhaus">bauhaus</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-2" to="/cyberpunk">cyberpunk</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-3" to="/memphis">memphis</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-4" to="/minimalist">minimalist</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-5" to="/steam">steam</router-link>
        <router-link class="mainNav__Items__Item mainNav__Items-6" to="/wide">wide</router-link>
      </div>
      <div class="mainNav__backChange">
         <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi__toggle">  
            <label for="navi__toggle" class="navigation__button">
              <span class="navigation__icon"></span>
            </label>
            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
              <ul class="navigation__list"> 
                <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>bauhaus</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>cyberpunk</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>memphis</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>minimalist</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>steam</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>06</span>wide</a></li>
              </ul>
            </nav>
         </div>
      </div>
  </div>
</template>

<style lang='scss' scoped>
.mainNav {
  display: flex;
  height: 3rem;
  width: 100%;
  max-width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  overflow: hidden;
  background-color: aqua;
  z-index: 1000;
  &__logo {
    margin-left: 2rem;
  }
/*测试 */
 &__Items{
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 2rem;
  &__Item{
    position: relative;
    font-size: 1rem;
    text-decoration: none;
    color: $color-button-blue;
    letter-spacing: 0.25rem;
    line-height: 1rem;
    text-transform: capitalize;
  }
}
&__backChange{
  width: 10rem;
  height: 10rem;
  background-image: linear-gradient(to right bottom,rgb(45, 147, 215),rgb(33, 211, 92));
 
}
}
.navigation{
  &__checkbox{
    display: none;
  }
  &__button{
    position:fixed;
    height: 6rem;
    width: 6rem;
    background-color: white;
    top: 2rem;
    right: 2rem;
    border-radius: 50%;
    text-align: center;
    z-index: 1001;
    box-shadow: 0 0.1rem 0.3rem black;
    cursor: pointer;
  }
  &__background{ 
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top:2rem;
    right: 2rem;
    background-image: radial-gradient($color-button-blue,$color-button-pink);
    //transform: scale(50);
    transition: transform 0.8s;
  }
  &__nav{ 
    position: fixed;
    height: 100vh;
    width: 100vw;
    top:0;
    left: 0;
    transition: all 0.8s;
    visibility: hidden;
    opacity: 0;

  }
  &__list{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%,-50%);
    width: 100%;
    transition: all 0.8s cubic-bezier(.55,-0.06,.66,1.4);
  }
  &__item{
    margin: 1rem;
    text-align: center;
  }
  &__link{
    &:link,
    &:visited{
    display: inline-block;
    padding:0.5rem 1rem;
    font-size: 2rem;
    font-weight: 300;
    color:white;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg,transparent 0%,transparent 50%,white 50%);  
    background-size: 230%;
    transition:all 0.4s;
    }
    &:hover,
    &:active{
      background-position: 100%;
      color: $color-button-blue;
      transform:translateX(0.5rem)
    }
    span{
    display: inline-block;
    margin-right: 1rem;
  }
  }

 &__checkbox:checked ~ &__background{
    transform: scale(80);

 }
  &__checkbox:checked ~ &__nav{
    visibility:visible;
    opacity: 1;
 }
   &__checkbox:checked ~ &__nav>&__list{
    left: 50%;
 }
&__checkbox:checked ~ &__button &__icon{
   background-color: transparent;

 }
 &__checkbox:checked ~ &__button &__icon::before{
    top:0;
    transform: rotateZ(135deg);    
   
 }
  &__checkbox:checked ~ &__button &__icon::after{
    top:0;
    transform: rotateZ(-135deg);    
   
 }
 

 &__icon{
  position: relative;
  margin-top: 3rem;
  &,
  &::before,
  &::after{
    width: 3rem;
    height: 2px;
    background-color: black;
    display: inline-block;
  }
  &::before,
  &::after{
    content:'';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
 &::before{
  top:-0.8rem;
 }
 &::after{
   top:0.8rem;
 }
 }
 &__button:hover &__icon::before{
  top:-1rem;
 }
  &__button:hover &__icon::after{
  top:1rem;
 }
}

</style>