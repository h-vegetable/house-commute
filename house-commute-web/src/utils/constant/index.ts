// 根据代码运行环境导出对应需要的常量
import DevConstant from './development'
import ProdConstant from './production'

const isDev = process.env.NODE_ENV === 'development'
const constant: Constant = isDev ? {...DevConstant, isDev} : {...ProdConstant, isDev}

export default { ...constant }
