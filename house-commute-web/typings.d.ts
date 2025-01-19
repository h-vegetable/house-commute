// import Vue from 'vue' // 扩展vue类型使用
export {}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // 先写成any，后面学习下怎么写成可扩展的类型声明
    $constant: Function,
    $util: Function,
  }
}

declare global {
  interface Window {
    AMapLoader: any,
    _AMapSecurityConfig: any,
  }
}

// declare interface Window {
//   AMapLoader: any,
// }


