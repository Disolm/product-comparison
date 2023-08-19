import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { store } from "@/store/modalWindow";

const app = createApp(App)
app.use(store)
app.mount('#app')
