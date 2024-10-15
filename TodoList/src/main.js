import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import './plugins'; // auto find to index.js
//createApp(App).mount('#app')
const app = createApp(App);
app.use(store)
app.mount('#app')
