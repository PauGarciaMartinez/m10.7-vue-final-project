import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import global from './styles/css/global.css'

createApp(App).use(router).mount('#app')
