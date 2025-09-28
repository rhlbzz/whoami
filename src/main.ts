import './styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'
import { inject } from '@vercel/analytics';

const app = createApp(App)
inject(); 

app.use(router)

app.mount('#app')
