import { createApp } from 'vue'

import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import './style.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
