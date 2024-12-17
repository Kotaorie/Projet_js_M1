import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './index.css';
import 'flowbite/dist/flowbite.js';
import 'flowbite/dist/flowbite.css';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
