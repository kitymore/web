import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'
import router from '@/router/index'
import { key, store } from '@/store'
import 'element-plus/dist/index.css'

createApp(App).use(store, key).use(router).mount('#app')
