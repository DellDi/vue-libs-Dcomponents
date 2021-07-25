import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import LibUses from './lib-uses'
import 'virtual:windi.css'
createApp(App).use(LibUses).mount('#app')

