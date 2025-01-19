// 通用工具函数
const Utils: UtilType =  {
  /**
   * 加载scriptjs
   * @param scriptUrl 需要加载的js的url
   */
  importScript(scriptUrl: string, scripId?: string): Promise<boolean> {
    const scrip = document.createElement('script')
    scrip.id = scripId || 'gaode-map'
    scrip.src = scriptUrl
    return new Promise((resolve, reject) => {
      document.body.appendChild(scrip)
      scrip.onload = () => {
        // console.log('script loaded')
        resolve(true)
      }
      scrip.onerror = (err) => {
        console.error(err)
        reject(false)
      }
    })
  },
}

export default Utils
