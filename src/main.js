import { createApp } from 'vue'
import './style.css'
import App from './App'
import { createPinia } from 'pinia'

createApp(App)
.use(createPinia()) 
.mount('#app')
