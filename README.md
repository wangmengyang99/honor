<!--
 * @Author: wmy 2137633492@qq.com
 * @Date: 2023-10-16 21:17:22
 * @LastEditors: wmy 2137633492@qq.com
 * @LastEditTime: 2023-10-17 19:59:56
 * @FilePath: \honor\README.md
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
# honor

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 重新构建项目结构
#使用medio结合rem实现响应式
注意点：html的font-size动态改变不能放在全局的scss文件中，应在index.html中。
#使用scss在vue中全局导入在vue3中，这一点与vue2不同
```sh
  css: {
     preprocessorOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "@/style/main.scss";`
      },
    },
  }
```

