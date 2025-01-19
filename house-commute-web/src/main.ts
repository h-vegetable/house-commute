import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import Utils from './utils/index'

const keyArr: Array<keyof UtilsType> = Object.keys(Utils)
keyArr.forEach((util) => {
  app.config.globalProperties[`$${util}`] = Utils[util]
})

app.use(createPinia())
app.use(router)

app.mount('#app')
