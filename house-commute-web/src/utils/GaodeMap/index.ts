import Util from '../utils'
// import { Message } from 'vue'

let AMapLoader = window.AMapLoader

class GMap {
  constructor(option) {
    // 引入高德地图相关方法，进行地图引擎引入判断

    this.map = null
    this.mapOption = {}

    this.initMapLoader(option)
  }

  // 判断是否已经引入地图引擎
  hasMapLoader() {
    return new Promise(resolve => {
      if (AMapLoader) {
        resolve(true)
        return
      }
      this.importGaodeMap().then(res => {
        resolve(res)
      })
    })
  }

  // 手动引入高德地图引擎
  private importGaodeMap() {
    // 若没有引入AMapLoader，则手动引入
    return new Promise(resolve => {
      Util.importScript('https://webapi.amap.com/loader.js', 'gaode-map').then(res => {
        AMapLoader = window.AMapLoader
        resolve(res)
      })
    })
  }

  // 初始化地图
  public async initMapLoader(option: {}) {
    const { container, key } = option
    this.mapOption = option
    const hasLoader = await this.hasMapLoader()
    if (!hasLoader) {
      console.error('加载高德地图引擎失败，请刷新页面重试！')
      return
    }
    console.log('>>> map laod', AMapLoader)
    window._AMapSecurityConfig = {
      securityJsCode: "e2a01703730f3f71e47e3b1c5c50a314",
    };
    AMapLoader.load({
      key: key || 'ee0abf6680d89d2a66f5ca879c92bd13',
      version: '2.0',
    }).then((AMap: any) => {
      // this.map = aMap
      this.initMap(AMap)
    }).catch((err: string) => {
      console.error(err)
    })
  }

  // 
  private initMap(AMap) {
    const { container, key } = this.mapOption
    console.log('>>> contt', document.getElementById(container))
    const element = document.getElementById(container)
    this.map = new AMap.Map(container, {
      viewMode: '2D', //默认使用 2D 模式
      zoom: 11, //地图级别
      center: [116.397428, 39.90923], //地图中心点
      mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
    })
    
  }
}

export default GMap
