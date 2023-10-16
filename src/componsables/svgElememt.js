/*
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-09-26 13:09:24
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-01 17:11:22
 * @FilePath: \honor\src\componsables\svgElememt.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/**
* @param {svgName} 
* @param {element}
* @return {element}
*/
export const getElement=(svgname,parent)=>{
   const svg = document.createElement('svg')
  svg.innerHTML = svgname
  parent.appendChild(svg)
}