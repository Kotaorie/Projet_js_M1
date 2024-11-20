import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import 'flowbite/dist/flowbite.js';
import 'flowbite/dist/flowbite.css';

createApp(App)
  .use(router)
  .mount('#app')
