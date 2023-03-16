import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/index.scss'
const app = createApp(App).use(router)
app.mount('#app')
